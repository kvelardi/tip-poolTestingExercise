describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  
  it('should not add a new server to allServers on submitServerInfo()', function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual (0);
  });

  it ('should updateServerTable with new server info', function(){
    submitServerInfo();
    updateServerTable();
    
    let dataList = document.querySelectorAll('#serverTable tbody tr td');

    expect(dataList.length).toEqual (2);
    expect(dataList[0].innerText).toEqual ('Alice');
    expect (dataList[1].innerText).toEqual ('$0.00'); 
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
});
})
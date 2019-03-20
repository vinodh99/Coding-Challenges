    public void distinctPairs(int[] arr, int sum){
    int count = 0;
    int len = arr.length;
    Map<Integer,Integer> map = new HashMap<Integer,Integer>();
    for(int i=0;i<len;i++){
        for(int j=i+1;j<len;j++){
            if(arr[i]+arr[j] == sum ){
                if(!(map.containsKey(arr[j])&&map.containsValue(arr[i]))) 
                map.put(arr[i], arr[j]);
            }
        }
    }
    count = pairs.size();
    System.out.println(count);
}
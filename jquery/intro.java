
public class intro {
    public static void main(String[] args) 
    {
        int[] array = {3, 5, 1, 7, 9, 2};
        int max = array[0];
        int min = array[0];
                
        for (int i = 1; i < array.length; i++) {

        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
        }

        System.out.println("The maximum element is " + max);
        System.out.println("The minimum element is " + min);
    }
    
}

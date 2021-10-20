#include<stdio.h>
int main()
{
    int i, start, end ,mid, n, search,arr[100];
    printf("enter no of elements:\n");
    scanf("%d",&n);
    printf("enter elements:\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",arr[i]);
    }
    printf("enter value to find:\n");
    scanf("%d",&search);
    start = 0;
    end = n-1;
    mid = (start+end)/2;
    while(start<=end)
    {
        if(arr[mid]<search)
        {
            start= mid +1;

        }
        else if (arr[mid] == search)
        {
            printf("%d found at location %d\n",search,mid+1);
            break;
        }
        else
        {
            end = mid - 1;
            mid = (start + end)/2;
        }
    }
        if(start>end)
        {
            printf("invalid input");
        }
        
    
    return 0;
}
from rest_framework.generics import ListCreateAPIView, CreateAPIView

class OwnerListCreateView(ListCreateAPIView):

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

class OwnerCreateView(CreateAPIView):

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)
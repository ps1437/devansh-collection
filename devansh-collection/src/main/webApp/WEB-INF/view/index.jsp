<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>

<!-- Access the bootstrap Css like this, 
		Spring boot will handle the resource mapping automcatically -->
<link rel="stylesheet" type="text/css"
	href="webjars/bootstrap/3.3.7/css/bootstrap.min.css" />

<!-- 
	<spring:url value="/css/main.css" var="springCss" />
	<link href="${springCss}" rel="stylesheet" />
	 -->
<c:url value="/css/main.css" var="jstlCss" />
<link href="${jstlCss}" rel="stylesheet" />

</head>
<style>
.has-search .form-control {
	padding-left: 2.375rem;
}

.has-search .form-control-feedback {
	position: absolute;
	z-index: 2;
	display: block;
	width: 2.375rem;
	height: 2.375rem;
	line-height: 2.375rem;
	text-align: center;
	pointer-events: none;
	color: #aaa;
}

.card {
	width: 350px;
}
</style>
<body>

	<nav class="navbar navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Devansh Collections</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#about">Product</a></li>
					<li><a href="#about">Admin</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container">
		<div class="form-group has-search">
			<span class="fa fa-search form-control-feedback"></span> <input
				type="text" class="form-control" placeholder="Search">
		</div>

		<table class="table table-striped table-bordered table-dark">
			<thead>
				<tr>
					<th>Artical Number</th>
					<th>Brand</th>
					<th>Price</th>

					<th>Size</th>
					<th></th>

				</tr>
			</thead>
			<tbody>
				<tr>
					<td>VKC 1100</td>
					<td>VKC</td>
					<td>250/-</td>
					<td><span class="badge badge-primary">6</span> <span
						class="badge badge-primary">7</span> <span
						class="badge badge-primary">8</span></td>
					<td><div class="btn-group">
							<button type="button" class="btn btn-primary">DELETE</button>
							<button type="button" class="btn btn-primary">EDIT</button>
						</div></td>
				</tr>
				<tr>
					<td>VKC 1100</td>
					<td>VKC</td>
					<td>250/-</td>
					<td><span class="badge badge-primary">6</span> <span
						class="badge badge-primary">7</span> <span
						class="badge badge-primary">8</span></td>
					<td><div class="btn-group">
							<button type="button" class="btn btn-primary">DELETE</button>
							<button type="button" class="btn btn-primary">EDIT</button>
						</div></td>
				</tr>

			</tbody>
		</table>


	</div>

	<div class='container'>

		<div class='row'>

			<div class='col-md-4'>
				<img src="https://i.ytimg.com/vi/rDCt7Wi04SI/maxresdefault.jpg"
					class="img-thumbnail" alt="Cinque Terre">
			</div>
			<div class='col-md-6'>
				<div class='card'>

					<form action="/action_page.php" class='card-body'>
						<div class="form-group">
							<label for="email">ARTICAL NO:</label> <input type="text"
								class="form-control">
						</div>
						<div class="form-group">
							<label for="pwd">BRAND:</label> <input type="text"
								class="form-control">
						</div>
						<div class="form-group">
							<label for="pwd">ACTUAL PRICE:</label> <input type="number"
								class="form-control">
						</div>

						<div class="form-group">
							<label for="pwd">SELLING PRICE:</label> <input type="number"
								class="form-control">
						</div>
						<div class="form-group">
							<label for="pwd">SIZE:</label> <input type="text"
								class="form-control">
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>

		</div>
	</div>
	<script type="text/javascript"
		src="webjars/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</body>

</html>
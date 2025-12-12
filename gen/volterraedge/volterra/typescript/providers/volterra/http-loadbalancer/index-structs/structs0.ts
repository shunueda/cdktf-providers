import * as cdktf from 'cdktf';
export interface HttpLoadbalancerActiveServicePoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerActiveServicePoliciesPoliciesToTerraform(struct?: HttpLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerActiveServicePoliciesPoliciesToHclTerraform(struct?: HttpLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerActiveServicePoliciesPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerActiveServicePoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerActiveServicePoliciesPolicies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerActiveServicePoliciesPoliciesOutputReference {
    return new HttpLoadbalancerActiveServicePoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerActiveServicePolicies {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#policies HttpLoadbalancer#policies}
  */
  readonly policies: HttpLoadbalancerActiveServicePoliciesPolicies[] | cdktf.IResolvable;
}

export function httpLoadbalancerActiveServicePoliciesToTerraform(struct?: HttpLoadbalancerActiveServicePoliciesOutputReference | HttpLoadbalancerActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(httpLoadbalancerActiveServicePoliciesPoliciesToTerraform, true)(struct!.policies),
  }
}


export function httpLoadbalancerActiveServicePoliciesToHclTerraform(struct?: HttpLoadbalancerActiveServicePoliciesOutputReference | HttpLoadbalancerActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(httpLoadbalancerActiveServicePoliciesPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerActiveServicePoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerActiveServicePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerActiveServicePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerActiveServicePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new HttpLoadbalancerActiveServicePoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: HttpLoadbalancerActiveServicePoliciesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#public_ip HttpLoadbalancer#public_ip}
  */
  readonly publicIp: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * cloud_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cloud_edge HttpLoadbalancer#cloud_edge}
  */
  readonly cloudEdge: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#segment HttpLoadbalancer#segment}
  */
  readonly segment: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    cloud_edge: httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToTerraform(struct!.cloudEdge),
    segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToTerraform(struct!.segment),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_edge: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToHclTerraform(struct!.cloudEdge),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeList",
    },
    segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._cloudEdge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudEdge = this._cloudEdge?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._cloudEdge.internalValue = undefined;
      this._segment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._cloudEdge.internalValue = value.cloudEdge;
      this._segment.internalValue = value.segment;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // cloud_edge - computed: false, optional: false, required: true
  private _cloudEdge = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference(this, "cloud_edge");
  public get cloudEdge() {
    return this._cloudEdge;
  }
  public putCloudEdge(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge) {
    this._cloudEdge.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudEdgeInput() {
    return this._cloudEdge.internalValue;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv4_vip HttpLoadbalancer#ipv4_vip}
  */
  readonly ipv4Vip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_vip HttpLoadbalancer#ipv6_vip}
  */
  readonly ipv6Vip?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#segment HttpLoadbalancer#segment}
  */
  readonly segment: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegment;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_vip: cdktf.stringToTerraform(struct!.ipv4Vip),
    ipv6_vip: cdktf.stringToTerraform(struct!.ipv6Vip),
    segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentToTerraform(struct!.segment),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_vip: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_vip: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Vip = this._ipv4Vip;
    }
    if (this._ipv6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Vip = this._ipv6Vip;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Vip = undefined;
      this._ipv6Vip = undefined;
      this._segment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Vip = value.ipv4Vip;
      this._ipv6Vip = value.ipv6Vip;
      this._segment.internalValue = value.segment;
    }
  }

  // ipv4_vip - computed: false, optional: false, required: true
  private _ipv4Vip?: string; 
  public get ipv4Vip() {
    return this.getStringAttribute('ipv4_vip');
  }
  public set ipv4Vip(value: string) {
    this._ipv4Vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VipInput() {
    return this._ipv4Vip;
  }

  // ipv6_vip - computed: false, optional: true, required: false
  private _ipv6Vip?: string; 
  public get ipv6Vip() {
    return this.getStringAttribute('ipv6_vip');
  }
  public set ipv6Vip(value: string) {
    this._ipv6Vip = value;
  }
  public resetIpv6Vip() {
    this._ipv6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VipInput() {
    return this._ipv6Vip;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#network HttpLoadbalancer#network}
  */
  readonly network: string;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    site: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct!.site),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // site - computed: false, optional: false, required: true
  private _site = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#segment HttpLoadbalancer#segment}
  */
  readonly segment: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct!.segment),
    site: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct!.site),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentList",
    },
    site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site - computed: false, optional: false, required: true
  private _site = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_v6_vip HttpLoadbalancer#default_v6_vip}
  */
  readonly defaultV6Vip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#default_vip HttpLoadbalancer#default_vip}
  */
  readonly defaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_v6_vip HttpLoadbalancer#specific_v6_vip}
  */
  readonly specificV6Vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_vip HttpLoadbalancer#specific_vip}
  */
  readonly specificVip?: string;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_network HttpLoadbalancer#virtual_network}
  */
  readonly virtualNetwork: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_v6_vip: cdktf.booleanToTerraform(struct!.defaultV6Vip),
    default_vip: cdktf.booleanToTerraform(struct!.defaultVip),
    specific_v6_vip: cdktf.stringToTerraform(struct!.specificV6Vip),
    specific_vip: cdktf.stringToTerraform(struct!.specificVip),
    virtual_network: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct!.virtualNetwork),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_v6_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_v6_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultV6Vip = this._defaultV6Vip;
    }
    if (this._defaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVip = this._defaultVip;
    }
    if (this._specificV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificV6Vip = this._specificV6Vip;
    }
    if (this._specificVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificVip = this._specificVip;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultV6Vip = undefined;
      this._defaultVip = undefined;
      this._specificV6Vip = undefined;
      this._specificVip = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultV6Vip = value.defaultV6Vip;
      this._defaultVip = value.defaultVip;
      this._specificV6Vip = value.specificV6Vip;
      this._specificVip = value.specificVip;
      this._virtualNetwork.internalValue = value.virtualNetwork;
    }
  }

  // default_v6_vip - computed: false, optional: true, required: false
  private _defaultV6Vip?: boolean | cdktf.IResolvable; 
  public get defaultV6Vip() {
    return this.getBooleanAttribute('default_v6_vip');
  }
  public set defaultV6Vip(value: boolean | cdktf.IResolvable) {
    this._defaultV6Vip = value;
  }
  public resetDefaultV6Vip() {
    this._defaultV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultV6VipInput() {
    return this._defaultV6Vip;
  }

  // default_vip - computed: false, optional: true, required: false
  private _defaultVip?: boolean | cdktf.IResolvable; 
  public get defaultVip() {
    return this.getBooleanAttribute('default_vip');
  }
  public set defaultVip(value: boolean | cdktf.IResolvable) {
    this._defaultVip = value;
  }
  public resetDefaultVip() {
    this._defaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVipInput() {
    return this._defaultVip;
  }

  // specific_v6_vip - computed: false, optional: true, required: false
  private _specificV6Vip?: string; 
  public get specificV6Vip() {
    return this.getStringAttribute('specific_v6_vip');
  }
  public set specificV6Vip(value: string) {
    this._specificV6Vip = value;
  }
  public resetSpecificV6Vip() {
    this._specificV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificV6VipInput() {
    return this._specificV6Vip;
  }

  // specific_vip - computed: false, optional: true, required: false
  private _specificVip?: string; 
  public get specificVip() {
    return this.getStringAttribute('specific_vip');
  }
  public set specificVip(value: string) {
    this._specificVip = value;
  }
  public resetSpecificVip() {
    this._specificVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificVipInput() {
    return this._specificVip;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#network HttpLoadbalancer#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#segment HttpLoadbalancer#segment}
  */
  readonly segment: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct!.segment),
    virtual_site: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentList",
    },
    virtual_site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip HttpLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6 HttpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#network HttpLoadbalancer#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct!.site),
    virtual_site: httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteList",
    },
    virtual_site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseCustomAdvertiseWhere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#port_ranges HttpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_default_port HttpLoadbalancer#use_default_port}
  */
  readonly useDefaultPort?: boolean | cdktf.IResolvable;
  /**
  * advertise_on_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#advertise_on_public HttpLoadbalancer#advertise_on_public}
  */
  readonly advertiseOnPublic?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic;
  /**
  * cloud_edge_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cloud_edge_segment HttpLoadbalancer#cloud_edge_segment}
  */
  readonly cloudEdgeSegment?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegment;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#segment HttpLoadbalancer#segment}
  */
  readonly segment?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegment;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site HttpLoadbalancer#site}
  */
  readonly site?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSite;
  /**
  * site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#site_segment HttpLoadbalancer#site_segment}
  */
  readonly siteSegment?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_network HttpLoadbalancer#virtual_network}
  */
  readonly virtualNetwork?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site HttpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite;
  /**
  * virtual_site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site_segment HttpLoadbalancer#virtual_site_segment}
  */
  readonly virtualSiteSegment?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment;
  /**
  * virtual_site_with_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#virtual_site_with_vip HttpLoadbalancer#virtual_site_with_vip}
  */
  readonly virtualSiteWithVip?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip;
  /**
  * vk8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#vk8s_service HttpLoadbalancer#vk8s_service}
  */
  readonly vk8SService?: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService;
}

export function httpLoadbalancerAdvertiseCustomAdvertiseWhereToTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    use_default_port: cdktf.booleanToTerraform(struct!.useDefaultPort),
    advertise_on_public: httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct!.advertiseOnPublic),
    cloud_edge_segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToTerraform(struct!.cloudEdgeSegment),
    segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentToTerraform(struct!.segment),
    site: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToTerraform(struct!.site),
    site_segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct!.siteSegment),
    virtual_network: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct!.virtualNetwork),
    virtual_site: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct!.virtualSite),
    virtual_site_segment: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct!.virtualSiteSegment),
    virtual_site_with_vip: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct!.virtualSiteWithVip),
    vk8s_service: httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct!.vk8SService),
  }
}


export function httpLoadbalancerAdvertiseCustomAdvertiseWhereToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_port: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_public: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct!.advertiseOnPublic),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicList",
    },
    cloud_edge_segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToHclTerraform(struct!.cloudEdgeSegment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentList",
    },
    segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentList",
    },
    site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteList",
    },
    site_segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct!.siteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentList",
    },
    virtual_network: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkList",
    },
    virtual_site: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteList",
    },
    virtual_site_segment: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct!.virtualSiteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentList",
    },
    virtual_site_with_vip: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct!.virtualSiteWithVip),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipList",
    },
    vk8s_service: {
      value: httpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct!.vk8SService),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._useDefaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultPort = this._useDefaultPort;
    }
    if (this._advertiseOnPublic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublic = this._advertiseOnPublic?.internalValue;
    }
    if (this._cloudEdgeSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudEdgeSegment = this._cloudEdgeSegment?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._siteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteSegment = this._siteSegment?.internalValue;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    if (this._virtualSiteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteSegment = this._virtualSiteSegment?.internalValue;
    }
    if (this._virtualSiteWithVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteWithVip = this._virtualSiteWithVip?.internalValue;
    }
    if (this._vk8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SService = this._vk8SService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._portRanges = undefined;
      this._useDefaultPort = undefined;
      this._advertiseOnPublic.internalValue = undefined;
      this._cloudEdgeSegment.internalValue = undefined;
      this._segment.internalValue = undefined;
      this._site.internalValue = undefined;
      this._siteSegment.internalValue = undefined;
      this._virtualNetwork.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
      this._virtualSiteSegment.internalValue = undefined;
      this._virtualSiteWithVip.internalValue = undefined;
      this._vk8SService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._portRanges = value.portRanges;
      this._useDefaultPort = value.useDefaultPort;
      this._advertiseOnPublic.internalValue = value.advertiseOnPublic;
      this._cloudEdgeSegment.internalValue = value.cloudEdgeSegment;
      this._segment.internalValue = value.segment;
      this._site.internalValue = value.site;
      this._siteSegment.internalValue = value.siteSegment;
      this._virtualNetwork.internalValue = value.virtualNetwork;
      this._virtualSite.internalValue = value.virtualSite;
      this._virtualSiteSegment.internalValue = value.virtualSiteSegment;
      this._virtualSiteWithVip.internalValue = value.virtualSiteWithVip;
      this._vk8SService.internalValue = value.vk8SService;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // use_default_port - computed: false, optional: true, required: false
  private _useDefaultPort?: boolean | cdktf.IResolvable; 
  public get useDefaultPort() {
    return this.getBooleanAttribute('use_default_port');
  }
  public set useDefaultPort(value: boolean | cdktf.IResolvable) {
    this._useDefaultPort = value;
  }
  public resetUseDefaultPort() {
    this._useDefaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPortInput() {
    return this._useDefaultPort;
  }

  // advertise_on_public - computed: false, optional: true, required: false
  private _advertiseOnPublic = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference(this, "advertise_on_public");
  public get advertiseOnPublic() {
    return this._advertiseOnPublic;
  }
  public putAdvertiseOnPublic(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic) {
    this._advertiseOnPublic.internalValue = value;
  }
  public resetAdvertiseOnPublic() {
    this._advertiseOnPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicInput() {
    return this._advertiseOnPublic.internalValue;
  }

  // cloud_edge_segment - computed: false, optional: true, required: false
  private _cloudEdgeSegment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference(this, "cloud_edge_segment");
  public get cloudEdgeSegment() {
    return this._cloudEdgeSegment;
  }
  public putCloudEdgeSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereCloudEdgeSegment) {
    this._cloudEdgeSegment.internalValue = value;
  }
  public resetCloudEdgeSegment() {
    this._cloudEdgeSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudEdgeSegmentInput() {
    return this._cloudEdgeSegment.internalValue;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // site_segment - computed: false, optional: true, required: false
  private _siteSegment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference(this, "site_segment");
  public get siteSegment() {
    return this._siteSegment;
  }
  public putSiteSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment) {
    this._siteSegment.internalValue = value;
  }
  public resetSiteSegment() {
    this._siteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteSegmentInput() {
    return this._siteSegment.internalValue;
  }

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }

  // virtual_site_segment - computed: false, optional: true, required: false
  private _virtualSiteSegment = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference(this, "virtual_site_segment");
  public get virtualSiteSegment() {
    return this._virtualSiteSegment;
  }
  public putVirtualSiteSegment(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment) {
    this._virtualSiteSegment.internalValue = value;
  }
  public resetVirtualSiteSegment() {
    this._virtualSiteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteSegmentInput() {
    return this._virtualSiteSegment.internalValue;
  }

  // virtual_site_with_vip - computed: false, optional: true, required: false
  private _virtualSiteWithVip = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference(this, "virtual_site_with_vip");
  public get virtualSiteWithVip() {
    return this._virtualSiteWithVip;
  }
  public putVirtualSiteWithVip(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip) {
    this._virtualSiteWithVip.internalValue = value;
  }
  public resetVirtualSiteWithVip() {
    this._virtualSiteWithVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteWithVipInput() {
    return this._virtualSiteWithVip.internalValue;
  }

  // vk8s_service - computed: false, optional: true, required: false
  private _vk8SService = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference(this, "vk8s_service");
  public get vk8SService() {
    return this._vk8SService;
  }
  public putVk8SService(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService) {
    this._vk8SService.internalValue = value;
  }
  public resetVk8SService() {
    this._vk8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SServiceInput() {
    return this._vk8SService.internalValue;
  }
}

export class HttpLoadbalancerAdvertiseCustomAdvertiseWhereList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerAdvertiseCustomAdvertiseWhereOutputReference {
    return new HttpLoadbalancerAdvertiseCustomAdvertiseWhereOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerAdvertiseCustom {
  /**
  * advertise_where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#advertise_where HttpLoadbalancer#advertise_where}
  */
  readonly advertiseWhere: HttpLoadbalancerAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable;
}

export function httpLoadbalancerAdvertiseCustomToTerraform(struct?: HttpLoadbalancerAdvertiseCustomOutputReference | HttpLoadbalancerAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_where: cdktf.listMapper(httpLoadbalancerAdvertiseCustomAdvertiseWhereToTerraform, true)(struct!.advertiseWhere),
  }
}


export function httpLoadbalancerAdvertiseCustomToHclTerraform(struct?: HttpLoadbalancerAdvertiseCustomOutputReference | HttpLoadbalancerAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_where: {
      value: cdktf.listMapperHcl(httpLoadbalancerAdvertiseCustomAdvertiseWhereToHclTerraform, true)(struct!.advertiseWhere),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseCustomAdvertiseWhereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseWhere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseWhere = this._advertiseWhere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseWhere.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseWhere.internalValue = value.advertiseWhere;
    }
  }

  // advertise_where - computed: false, optional: false, required: true
  private _advertiseWhere = new HttpLoadbalancerAdvertiseCustomAdvertiseWhereList(this, "advertise_where", false);
  public get advertiseWhere() {
    return this._advertiseWhere;
  }
  public putAdvertiseWhere(value: HttpLoadbalancerAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable) {
    this._advertiseWhere.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseWhereInput() {
    return this._advertiseWhere.internalValue;
  }
}
export interface HttpLoadbalancerAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAdvertiseOnPublicPublicIpToTerraform(struct?: HttpLoadbalancerAdvertiseOnPublicPublicIpOutputReference | HttpLoadbalancerAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerAdvertiseOnPublicPublicIpToHclTerraform(struct?: HttpLoadbalancerAdvertiseOnPublicPublicIpOutputReference | HttpLoadbalancerAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseOnPublicPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseOnPublicPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#public_ip HttpLoadbalancer#public_ip}
  */
  readonly publicIp: HttpLoadbalancerAdvertiseOnPublicPublicIp;
}

export function httpLoadbalancerAdvertiseOnPublicToTerraform(struct?: HttpLoadbalancerAdvertiseOnPublicOutputReference | HttpLoadbalancerAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: httpLoadbalancerAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function httpLoadbalancerAdvertiseOnPublicToHclTerraform(struct?: HttpLoadbalancerAdvertiseOnPublicOutputReference | HttpLoadbalancerAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: httpLoadbalancerAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new HttpLoadbalancerAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: HttpLoadbalancerAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface HttpLoadbalancerApiDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiDefinitionToTerraform(struct?: HttpLoadbalancerApiDefinitionOutputReference | HttpLoadbalancerApiDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiDefinitionToHclTerraform(struct?: HttpLoadbalancerApiDefinitionOutputReference | HttpLoadbalancerApiDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerApiDefinitionsApiDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiDefinitionsApiDefinitionsToTerraform(struct?: HttpLoadbalancerApiDefinitionsApiDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiDefinitionsApiDefinitionsToHclTerraform(struct?: HttpLoadbalancerApiDefinitionsApiDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiDefinitionsApiDefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiDefinitionsApiDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiDefinitionsApiDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiDefinitionsApiDefinitionsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiDefinitionsApiDefinitions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiDefinitionsApiDefinitionsOutputReference {
    return new HttpLoadbalancerApiDefinitionsApiDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiDefinitions {
  /**
  * api_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_definitions HttpLoadbalancer#api_definitions}
  */
  readonly apiDefinitions?: HttpLoadbalancerApiDefinitionsApiDefinitions[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiDefinitionsToTerraform(struct?: HttpLoadbalancerApiDefinitionsOutputReference | HttpLoadbalancerApiDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_definitions: cdktf.listMapper(httpLoadbalancerApiDefinitionsApiDefinitionsToTerraform, true)(struct!.apiDefinitions),
  }
}


export function httpLoadbalancerApiDefinitionsToHclTerraform(struct?: HttpLoadbalancerApiDefinitionsOutputReference | HttpLoadbalancerApiDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_definitions: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiDefinitionsApiDefinitionsToHclTerraform, true)(struct!.apiDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiDefinitionsApiDefinitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiDefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDefinitions = this._apiDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDefinitions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDefinitions.internalValue = value.apiDefinitions;
    }
  }

  // api_definitions - computed: false, optional: true, required: false
  private _apiDefinitions = new HttpLoadbalancerApiDefinitionsApiDefinitionsList(this, "api_definitions", false);
  public get apiDefinitions() {
    return this._apiDefinitions;
  }
  public putApiDefinitions(value: HttpLoadbalancerApiDefinitionsApiDefinitions[] | cdktf.IResolvable) {
    this._apiDefinitions.internalValue = value;
  }
  public resetApiDefinitions() {
    this._apiDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDefinitionsInput() {
    return this._apiDefinitions.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow HttpLoadbalancer#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#deny HttpLoadbalancer#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesActionToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    deny: cdktf.booleanToTerraform(struct!.deny),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesActionToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._deny = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_path HttpLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action HttpLoadbalancer#action}
  */
  readonly action: HttpLoadbalancerApiProtectionRulesApiEndpointRulesAction;
  /**
  * api_endpoint_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_method HttpLoadbalancer#api_endpoint_method}
  */
  readonly apiEndpointMethod?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadata;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher;
}

export function httpLoadbalancerApiProtectionRulesApiEndpointRulesToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    action: httpLoadbalancerApiProtectionRulesApiEndpointRulesActionToTerraform(struct!.action),
    api_endpoint_method: httpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToTerraform(struct!.apiEndpointMethod),
    client_matcher: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToTerraform(struct!.clientMatcher),
    metadata: httpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToTerraform(struct!.metadata),
    request_matcher: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiProtectionRulesApiEndpointRulesToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesActionList",
    },
    api_endpoint_method: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToHclTerraform(struct!.apiEndpointMethod),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodList",
    },
    client_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherList",
    },
    metadata: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataList",
    },
    request_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._apiEndpointMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointMethod = this._apiEndpointMethod?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiEndpointPath = undefined;
      this._specificDomain = undefined;
      this._action.internalValue = undefined;
      this._apiEndpointMethod.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiEndpointPath = value.apiEndpointPath;
      this._specificDomain = value.specificDomain;
      this._action.internalValue = value.action;
      this._apiEndpointMethod.internalValue = value.apiEndpointMethod;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._metadata.internalValue = value.metadata;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // action - computed: false, optional: false, required: true
  private _action = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // api_endpoint_method - computed: false, optional: true, required: false
  private _apiEndpointMethod = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference(this, "api_endpoint_method");
  public get apiEndpointMethod() {
    return this._apiEndpointMethod;
  }
  public putApiEndpointMethod(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod) {
    this._apiEndpointMethod.internalValue = value;
  }
  public resetApiEndpointMethod() {
    this._apiEndpointMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointMethodInput() {
    return this._apiEndpointMethod.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiEndpointRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiEndpointRulesOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#allow HttpLoadbalancer#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#deny HttpLoadbalancer#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesActionToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    deny: cdktf.booleanToTerraform(struct!.deny),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesActionToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._deny = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference | HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiProtectionRulesApiGroupsRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#action HttpLoadbalancer#action}
  */
  readonly action: HttpLoadbalancerApiProtectionRulesApiGroupsRulesAction;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadata;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher;
}

export function httpLoadbalancerApiProtectionRulesApiGroupsRulesToTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    action: httpLoadbalancerApiProtectionRulesApiGroupsRulesActionToTerraform(struct!.action),
    client_matcher: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToTerraform(struct!.clientMatcher),
    metadata: httpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToTerraform(struct!.metadata),
    request_matcher: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiProtectionRulesApiGroupsRulesToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesActionList",
    },
    client_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherList",
    },
    metadata: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataList",
    },
    request_matcher: {
      value: httpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._action.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._action.internalValue = value.action;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._metadata.internalValue = value.metadata;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // action - computed: false, optional: false, required: true
  private _action = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiProtectionRulesApiGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiProtectionRulesApiGroupsRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiProtectionRulesApiGroupsRulesOutputReference {
    return new HttpLoadbalancerApiProtectionRulesApiGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiProtectionRules {
  /**
  * api_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_rules HttpLoadbalancer#api_endpoint_rules}
  */
  readonly apiEndpointRules?: HttpLoadbalancerApiProtectionRulesApiEndpointRules[] | cdktf.IResolvable;
  /**
  * api_groups_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_groups_rules HttpLoadbalancer#api_groups_rules}
  */
  readonly apiGroupsRules?: HttpLoadbalancerApiProtectionRulesApiGroupsRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiProtectionRulesToTerraform(struct?: HttpLoadbalancerApiProtectionRulesOutputReference | HttpLoadbalancerApiProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_rules: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiEndpointRulesToTerraform, true)(struct!.apiEndpointRules),
    api_groups_rules: cdktf.listMapper(httpLoadbalancerApiProtectionRulesApiGroupsRulesToTerraform, true)(struct!.apiGroupsRules),
  }
}


export function httpLoadbalancerApiProtectionRulesToHclTerraform(struct?: HttpLoadbalancerApiProtectionRulesOutputReference | HttpLoadbalancerApiProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiEndpointRulesToHclTerraform, true)(struct!.apiEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiEndpointRulesList",
    },
    api_groups_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiProtectionRulesApiGroupsRulesToHclTerraform, true)(struct!.apiGroupsRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiProtectionRulesApiGroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiProtectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiProtectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointRules = this._apiEndpointRules?.internalValue;
    }
    if (this._apiGroupsRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroupsRules = this._apiGroupsRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiProtectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointRules.internalValue = undefined;
      this._apiGroupsRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointRules.internalValue = value.apiEndpointRules;
      this._apiGroupsRules.internalValue = value.apiGroupsRules;
    }
  }

  // api_endpoint_rules - computed: false, optional: true, required: false
  private _apiEndpointRules = new HttpLoadbalancerApiProtectionRulesApiEndpointRulesList(this, "api_endpoint_rules", false);
  public get apiEndpointRules() {
    return this._apiEndpointRules;
  }
  public putApiEndpointRules(value: HttpLoadbalancerApiProtectionRulesApiEndpointRules[] | cdktf.IResolvable) {
    this._apiEndpointRules.internalValue = value;
  }
  public resetApiEndpointRules() {
    this._apiEndpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointRulesInput() {
    return this._apiEndpointRules.internalValue;
  }

  // api_groups_rules - computed: false, optional: true, required: false
  private _apiGroupsRules = new HttpLoadbalancerApiProtectionRulesApiGroupsRulesList(this, "api_groups_rules", false);
  public get apiGroupsRules() {
    return this._apiGroupsRules;
  }
  public putApiGroupsRules(value: HttpLoadbalancerApiProtectionRulesApiGroupsRules[] | cdktf.IResolvable) {
    this._apiGroupsRules.internalValue = value;
  }
  public resetApiGroupsRules() {
    this._apiGroupsRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsRulesInput() {
    return this._apiGroupsRules.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#threshold HttpLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#unit HttpLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#use_http_lb_user_id HttpLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_user_id HttpLoadbalancer#ref_user_id}
  */
  readonly refUserId?: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_http_lb_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpLbUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_user_id: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._useHttpLbUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpLbUserId = this._useHttpLbUserId;
    }
    if (this._refUserId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refUserId = this._refUserId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._unit = undefined;
      this._useHttpLbUserId = undefined;
      this._refUserId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._useHttpLbUserId = value.useHttpLbUserId;
      this._refUserId.internalValue = value.refUserId;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // use_http_lb_user_id - computed: false, optional: true, required: false
  private _useHttpLbUserId?: boolean | cdktf.IResolvable; 
  public get useHttpLbUserId() {
    return this.getBooleanAttribute('use_http_lb_user_id');
  }
  public set useHttpLbUserId(value: boolean | cdktf.IResolvable) {
    this._useHttpLbUserId = value;
  }
  public resetUseHttpLbUserId() {
    this._useHttpLbUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpLbUserIdInput() {
    return this._useHttpLbUserId;
  }

  // ref_user_id - computed: false, optional: true, required: false
  private _refUserId = new HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId) {
    this._refUserId.internalValue = value;
  }
  public resetRefUserId() {
    this._refUserId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refUserIdInput() {
    return this._refUserId.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitApiEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_path HttpLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_endpoint_method HttpLoadbalancer#api_endpoint_method}
  */
  readonly apiEndpointMethod?: HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#inline_rate_limiter HttpLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ref_rate_limiter HttpLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher;
}

export function httpLoadbalancerApiRateLimitApiEndpointRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_method: httpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToTerraform(struct!.apiEndpointMethod),
    client_matcher: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: httpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_method: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToHclTerraform(struct!.apiEndpointMethod),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodList",
    },
    client_matcher: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterList",
    },
    request_matcher: {
      value: httpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointMethod = this._apiEndpointMethod?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._inlineRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRateLimiter = this._inlineRateLimiter?.internalValue;
    }
    if (this._refRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refRateLimiter = this._refRateLimiter?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiEndpointPath = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointMethod.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._inlineRateLimiter.internalValue = undefined;
      this._refRateLimiter.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiEndpointPath = value.apiEndpointPath;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointMethod.internalValue = value.apiEndpointMethod;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._inlineRateLimiter.internalValue = value.inlineRateLimiter;
      this._refRateLimiter.internalValue = value.refRateLimiter;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_method - computed: false, optional: true, required: false
  private _apiEndpointMethod = new HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference(this, "api_endpoint_method");
  public get apiEndpointMethod() {
    return this._apiEndpointMethod;
  }
  public putApiEndpointMethod(value: HttpLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod) {
    this._apiEndpointMethod.internalValue = value;
  }
  public resetApiEndpointMethod() {
    this._apiEndpointMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointMethodInput() {
    return this._apiEndpointMethod.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiRateLimitApiEndpointRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // inline_rate_limiter - computed: false, optional: true, required: false
  private _inlineRateLimiter = new HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: HttpLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter) {
    this._inlineRateLimiter.internalValue = value;
  }
  public resetInlineRateLimiter() {
    this._inlineRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRateLimiterInput() {
    return this._inlineRateLimiter.internalValue;
  }

  // ref_rate_limiter - computed: false, optional: true, required: false
  private _refRateLimiter = new HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter) {
    this._refRateLimiter.internalValue = value;
  }
  public resetRefRateLimiter() {
    this._refRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refRateLimiterInput() {
    return this._refRateLimiter.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitApiEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitApiEndpointRulesOutputReference {
    return new HttpLoadbalancerApiRateLimitApiEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._path = value.path;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#api_groups HttpLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

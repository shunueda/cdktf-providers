// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudTransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#annotations CloudTransitGateway#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#description CloudTransitGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#disable CloudTransitGateway#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#id CloudTransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#labels CloudTransitGateway#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#name CloudTransitGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#namespace CloudTransitGateway#namespace}
  */
  readonly namespace: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#aws CloudTransitGateway#aws}
  */
  readonly aws?: CloudTransitGatewayAws;
}
export interface CloudTransitGatewayAwsCloudCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#name CloudTransitGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#namespace CloudTransitGateway#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#tenant CloudTransitGateway#tenant}
  */
  readonly tenant?: string;
}

export function cloudTransitGatewayAwsCloudCredentialsToTerraform(struct?: CloudTransitGatewayAwsCloudCredentialsOutputReference | CloudTransitGatewayAwsCloudCredentials): any {
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


export function cloudTransitGatewayAwsCloudCredentialsToHclTerraform(struct?: CloudTransitGatewayAwsCloudCredentialsOutputReference | CloudTransitGatewayAwsCloudCredentials): any {
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

export class CloudTransitGatewayAwsCloudCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAwsCloudCredentials | undefined {
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

  public set internalValue(value: CloudTransitGatewayAwsCloudCredentials | undefined) {
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
export interface CloudTransitGatewayAwsExistingTgw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#tgw_asn CloudTransitGateway#tgw_asn}
  */
  readonly tgwAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#tgw_id CloudTransitGateway#tgw_id}
  */
  readonly tgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#volterra_site_asn CloudTransitGateway#volterra_site_asn}
  */
  readonly volterraSiteAsn?: number;
}

export function cloudTransitGatewayAwsExistingTgwToTerraform(struct?: CloudTransitGatewayAwsExistingTgwOutputReference | CloudTransitGatewayAwsExistingTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tgw_asn: cdktf.numberToTerraform(struct!.tgwAsn),
    tgw_id: cdktf.stringToTerraform(struct!.tgwId),
    volterra_site_asn: cdktf.numberToTerraform(struct!.volterraSiteAsn),
  }
}


export function cloudTransitGatewayAwsExistingTgwToHclTerraform(struct?: CloudTransitGatewayAwsExistingTgwOutputReference | CloudTransitGatewayAwsExistingTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tgw_asn: {
      value: cdktf.numberToHclTerraform(struct!.tgwAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgw_id: {
      value: cdktf.stringToHclTerraform(struct!.tgwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_site_asn: {
      value: cdktf.numberToHclTerraform(struct!.volterraSiteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTransitGatewayAwsExistingTgwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAwsExistingTgw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tgwAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwAsn = this._tgwAsn;
    }
    if (this._tgwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwId = this._tgwId;
    }
    if (this._volterraSiteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSiteAsn = this._volterraSiteAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTransitGatewayAwsExistingTgw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tgwAsn = undefined;
      this._tgwId = undefined;
      this._volterraSiteAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tgwAsn = value.tgwAsn;
      this._tgwId = value.tgwId;
      this._volterraSiteAsn = value.volterraSiteAsn;
    }
  }

  // tgw_asn - computed: false, optional: true, required: false
  private _tgwAsn?: number; 
  public get tgwAsn() {
    return this.getNumberAttribute('tgw_asn');
  }
  public set tgwAsn(value: number) {
    this._tgwAsn = value;
  }
  public resetTgwAsn() {
    this._tgwAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAsnInput() {
    return this._tgwAsn;
  }

  // tgw_id - computed: false, optional: true, required: false
  private _tgwId?: string; 
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }
  public set tgwId(value: string) {
    this._tgwId = value;
  }
  public resetTgwId() {
    this._tgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // volterra_site_asn - computed: false, optional: true, required: false
  private _volterraSiteAsn?: number; 
  public get volterraSiteAsn() {
    return this.getNumberAttribute('volterra_site_asn');
  }
  public set volterraSiteAsn(value: number) {
    this._volterraSiteAsn = value;
  }
  public resetVolterraSiteAsn() {
    this._volterraSiteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSiteAsnInput() {
    return this._volterraSiteAsn;
  }
}
export interface CloudTransitGatewayAwsNewTgwUserAssigned {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#tgw_asn CloudTransitGateway#tgw_asn}
  */
  readonly tgwAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#volterra_site_asn CloudTransitGateway#volterra_site_asn}
  */
  readonly volterraSiteAsn?: number;
}

export function cloudTransitGatewayAwsNewTgwUserAssignedToTerraform(struct?: CloudTransitGatewayAwsNewTgwUserAssignedOutputReference | CloudTransitGatewayAwsNewTgwUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tgw_asn: cdktf.numberToTerraform(struct!.tgwAsn),
    volterra_site_asn: cdktf.numberToTerraform(struct!.volterraSiteAsn),
  }
}


export function cloudTransitGatewayAwsNewTgwUserAssignedToHclTerraform(struct?: CloudTransitGatewayAwsNewTgwUserAssignedOutputReference | CloudTransitGatewayAwsNewTgwUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tgw_asn: {
      value: cdktf.numberToHclTerraform(struct!.tgwAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volterra_site_asn: {
      value: cdktf.numberToHclTerraform(struct!.volterraSiteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTransitGatewayAwsNewTgwUserAssignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAwsNewTgwUserAssigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tgwAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwAsn = this._tgwAsn;
    }
    if (this._volterraSiteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSiteAsn = this._volterraSiteAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTransitGatewayAwsNewTgwUserAssigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tgwAsn = undefined;
      this._volterraSiteAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tgwAsn = value.tgwAsn;
      this._volterraSiteAsn = value.volterraSiteAsn;
    }
  }

  // tgw_asn - computed: false, optional: true, required: false
  private _tgwAsn?: number; 
  public get tgwAsn() {
    return this.getNumberAttribute('tgw_asn');
  }
  public set tgwAsn(value: number) {
    this._tgwAsn = value;
  }
  public resetTgwAsn() {
    this._tgwAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAsnInput() {
    return this._tgwAsn;
  }

  // volterra_site_asn - computed: false, optional: true, required: false
  private _volterraSiteAsn?: number; 
  public get volterraSiteAsn() {
    return this.getNumberAttribute('volterra_site_asn');
  }
  public set volterraSiteAsn(value: number) {
    this._volterraSiteAsn = value;
  }
  public resetVolterraSiteAsn() {
    this._volterraSiteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSiteAsnInput() {
    return this._volterraSiteAsn;
  }
}
export interface CloudTransitGatewayAwsNewTgw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#system_generated CloudTransitGateway#system_generated}
  */
  readonly systemGenerated?: boolean | cdktf.IResolvable;
  /**
  * user_assigned block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#user_assigned CloudTransitGateway#user_assigned}
  */
  readonly userAssigned?: CloudTransitGatewayAwsNewTgwUserAssigned;
}

export function cloudTransitGatewayAwsNewTgwToTerraform(struct?: CloudTransitGatewayAwsNewTgwOutputReference | CloudTransitGatewayAwsNewTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_generated: cdktf.booleanToTerraform(struct!.systemGenerated),
    user_assigned: cloudTransitGatewayAwsNewTgwUserAssignedToTerraform(struct!.userAssigned),
  }
}


export function cloudTransitGatewayAwsNewTgwToHclTerraform(struct?: CloudTransitGatewayAwsNewTgwOutputReference | CloudTransitGatewayAwsNewTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_generated: {
      value: cdktf.booleanToHclTerraform(struct!.systemGenerated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_assigned: {
      value: cloudTransitGatewayAwsNewTgwUserAssignedToHclTerraform(struct!.userAssigned),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTransitGatewayAwsNewTgwUserAssignedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTransitGatewayAwsNewTgwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAwsNewTgw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemGenerated !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemGenerated = this._systemGenerated;
    }
    if (this._userAssigned?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssigned = this._userAssigned?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTransitGatewayAwsNewTgw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemGenerated = undefined;
      this._userAssigned.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemGenerated = value.systemGenerated;
      this._userAssigned.internalValue = value.userAssigned;
    }
  }

  // system_generated - computed: false, optional: true, required: false
  private _systemGenerated?: boolean | cdktf.IResolvable; 
  public get systemGenerated() {
    return this.getBooleanAttribute('system_generated');
  }
  public set systemGenerated(value: boolean | cdktf.IResolvable) {
    this._systemGenerated = value;
  }
  public resetSystemGenerated() {
    this._systemGenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemGeneratedInput() {
    return this._systemGenerated;
  }

  // user_assigned - computed: false, optional: true, required: false
  private _userAssigned = new CloudTransitGatewayAwsNewTgwUserAssignedOutputReference(this, "user_assigned");
  public get userAssigned() {
    return this._userAssigned;
  }
  public putUserAssigned(value: CloudTransitGatewayAwsNewTgwUserAssigned) {
    this._userAssigned.internalValue = value;
  }
  public resetUserAssigned() {
    this._userAssigned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedInput() {
    return this._userAssigned.internalValue;
  }
}
export interface CloudTransitGatewayAwsPrimarySecureMeshSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#name CloudTransitGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#namespace CloudTransitGateway#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#tenant CloudTransitGateway#tenant}
  */
  readonly tenant?: string;
}

export function cloudTransitGatewayAwsPrimarySecureMeshSiteToTerraform(struct?: CloudTransitGatewayAwsPrimarySecureMeshSiteOutputReference | CloudTransitGatewayAwsPrimarySecureMeshSite): any {
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


export function cloudTransitGatewayAwsPrimarySecureMeshSiteToHclTerraform(struct?: CloudTransitGatewayAwsPrimarySecureMeshSiteOutputReference | CloudTransitGatewayAwsPrimarySecureMeshSite): any {
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

export class CloudTransitGatewayAwsPrimarySecureMeshSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAwsPrimarySecureMeshSite | undefined {
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

  public set internalValue(value: CloudTransitGatewayAwsPrimarySecureMeshSite | undefined) {
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
export interface CloudTransitGatewayAwsServiceVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#subnet_ids CloudTransitGateway#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#vpc_id CloudTransitGateway#vpc_id}
  */
  readonly vpcId: string;
}

export function cloudTransitGatewayAwsServiceVpcToTerraform(struct?: CloudTransitGatewayAwsServiceVpcOutputReference | CloudTransitGatewayAwsServiceVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function cloudTransitGatewayAwsServiceVpcToHclTerraform(struct?: CloudTransitGatewayAwsServiceVpcOutputReference | CloudTransitGatewayAwsServiceVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTransitGatewayAwsServiceVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAwsServiceVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTransitGatewayAwsServiceVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface CloudTransitGatewayAwsTgwCidr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#ipv4 CloudTransitGateway#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#ipv6 CloudTransitGateway#ipv6}
  */
  readonly ipv6?: string;
}

export function cloudTransitGatewayAwsTgwCidrToTerraform(struct?: CloudTransitGatewayAwsTgwCidrOutputReference | CloudTransitGatewayAwsTgwCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function cloudTransitGatewayAwsTgwCidrToHclTerraform(struct?: CloudTransitGatewayAwsTgwCidrOutputReference | CloudTransitGatewayAwsTgwCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTransitGatewayAwsTgwCidrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAwsTgwCidr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTransitGatewayAwsTgwCidr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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
}
export interface CloudTransitGatewayAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#aws_region CloudTransitGateway#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#reserved_tgw_cidr CloudTransitGateway#reserved_tgw_cidr}
  */
  readonly reservedTgwCidr?: boolean | cdktf.IResolvable;
  /**
  * cloud_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#cloud_credentials CloudTransitGateway#cloud_credentials}
  */
  readonly cloudCredentials?: CloudTransitGatewayAwsCloudCredentials;
  /**
  * existing_tgw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#existing_tgw CloudTransitGateway#existing_tgw}
  */
  readonly existingTgw?: CloudTransitGatewayAwsExistingTgw;
  /**
  * new_tgw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#new_tgw CloudTransitGateway#new_tgw}
  */
  readonly newTgw?: CloudTransitGatewayAwsNewTgw;
  /**
  * primary_secure_mesh_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#primary_secure_mesh_site CloudTransitGateway#primary_secure_mesh_site}
  */
  readonly primarySecureMeshSite?: CloudTransitGatewayAwsPrimarySecureMeshSite;
  /**
  * service_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#service_vpc CloudTransitGateway#service_vpc}
  */
  readonly serviceVpc: CloudTransitGatewayAwsServiceVpc;
  /**
  * tgw_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#tgw_cidr CloudTransitGateway#tgw_cidr}
  */
  readonly tgwCidr?: CloudTransitGatewayAwsTgwCidr;
}

export function cloudTransitGatewayAwsToTerraform(struct?: CloudTransitGatewayAwsOutputReference | CloudTransitGatewayAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    reserved_tgw_cidr: cdktf.booleanToTerraform(struct!.reservedTgwCidr),
    cloud_credentials: cloudTransitGatewayAwsCloudCredentialsToTerraform(struct!.cloudCredentials),
    existing_tgw: cloudTransitGatewayAwsExistingTgwToTerraform(struct!.existingTgw),
    new_tgw: cloudTransitGatewayAwsNewTgwToTerraform(struct!.newTgw),
    primary_secure_mesh_site: cloudTransitGatewayAwsPrimarySecureMeshSiteToTerraform(struct!.primarySecureMeshSite),
    service_vpc: cloudTransitGatewayAwsServiceVpcToTerraform(struct!.serviceVpc),
    tgw_cidr: cloudTransitGatewayAwsTgwCidrToTerraform(struct!.tgwCidr),
  }
}


export function cloudTransitGatewayAwsToHclTerraform(struct?: CloudTransitGatewayAwsOutputReference | CloudTransitGatewayAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_tgw_cidr: {
      value: cdktf.booleanToHclTerraform(struct!.reservedTgwCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_credentials: {
      value: cloudTransitGatewayAwsCloudCredentialsToHclTerraform(struct!.cloudCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTransitGatewayAwsCloudCredentialsList",
    },
    existing_tgw: {
      value: cloudTransitGatewayAwsExistingTgwToHclTerraform(struct!.existingTgw),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTransitGatewayAwsExistingTgwList",
    },
    new_tgw: {
      value: cloudTransitGatewayAwsNewTgwToHclTerraform(struct!.newTgw),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTransitGatewayAwsNewTgwList",
    },
    primary_secure_mesh_site: {
      value: cloudTransitGatewayAwsPrimarySecureMeshSiteToHclTerraform(struct!.primarySecureMeshSite),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTransitGatewayAwsPrimarySecureMeshSiteList",
    },
    service_vpc: {
      value: cloudTransitGatewayAwsServiceVpcToHclTerraform(struct!.serviceVpc),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTransitGatewayAwsServiceVpcList",
    },
    tgw_cidr: {
      value: cloudTransitGatewayAwsTgwCidrToHclTerraform(struct!.tgwCidr),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTransitGatewayAwsTgwCidrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTransitGatewayAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTransitGatewayAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._reservedTgwCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedTgwCidr = this._reservedTgwCidr;
    }
    if (this._cloudCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentials = this._cloudCredentials?.internalValue;
    }
    if (this._existingTgw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingTgw = this._existingTgw?.internalValue;
    }
    if (this._newTgw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTgw = this._newTgw?.internalValue;
    }
    if (this._primarySecureMeshSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySecureMeshSite = this._primarySecureMeshSite?.internalValue;
    }
    if (this._serviceVpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVpc = this._serviceVpc?.internalValue;
    }
    if (this._tgwCidr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwCidr = this._tgwCidr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTransitGatewayAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._reservedTgwCidr = undefined;
      this._cloudCredentials.internalValue = undefined;
      this._existingTgw.internalValue = undefined;
      this._newTgw.internalValue = undefined;
      this._primarySecureMeshSite.internalValue = undefined;
      this._serviceVpc.internalValue = undefined;
      this._tgwCidr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._reservedTgwCidr = value.reservedTgwCidr;
      this._cloudCredentials.internalValue = value.cloudCredentials;
      this._existingTgw.internalValue = value.existingTgw;
      this._newTgw.internalValue = value.newTgw;
      this._primarySecureMeshSite.internalValue = value.primarySecureMeshSite;
      this._serviceVpc.internalValue = value.serviceVpc;
      this._tgwCidr.internalValue = value.tgwCidr;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // reserved_tgw_cidr - computed: false, optional: true, required: false
  private _reservedTgwCidr?: boolean | cdktf.IResolvable; 
  public get reservedTgwCidr() {
    return this.getBooleanAttribute('reserved_tgw_cidr');
  }
  public set reservedTgwCidr(value: boolean | cdktf.IResolvable) {
    this._reservedTgwCidr = value;
  }
  public resetReservedTgwCidr() {
    this._reservedTgwCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedTgwCidrInput() {
    return this._reservedTgwCidr;
  }

  // cloud_credentials - computed: false, optional: true, required: false
  private _cloudCredentials = new CloudTransitGatewayAwsCloudCredentialsOutputReference(this, "cloud_credentials");
  public get cloudCredentials() {
    return this._cloudCredentials;
  }
  public putCloudCredentials(value: CloudTransitGatewayAwsCloudCredentials) {
    this._cloudCredentials.internalValue = value;
  }
  public resetCloudCredentials() {
    this._cloudCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsInput() {
    return this._cloudCredentials.internalValue;
  }

  // existing_tgw - computed: false, optional: true, required: false
  private _existingTgw = new CloudTransitGatewayAwsExistingTgwOutputReference(this, "existing_tgw");
  public get existingTgw() {
    return this._existingTgw;
  }
  public putExistingTgw(value: CloudTransitGatewayAwsExistingTgw) {
    this._existingTgw.internalValue = value;
  }
  public resetExistingTgw() {
    this._existingTgw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingTgwInput() {
    return this._existingTgw.internalValue;
  }

  // new_tgw - computed: false, optional: true, required: false
  private _newTgw = new CloudTransitGatewayAwsNewTgwOutputReference(this, "new_tgw");
  public get newTgw() {
    return this._newTgw;
  }
  public putNewTgw(value: CloudTransitGatewayAwsNewTgw) {
    this._newTgw.internalValue = value;
  }
  public resetNewTgw() {
    this._newTgw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTgwInput() {
    return this._newTgw.internalValue;
  }

  // primary_secure_mesh_site - computed: false, optional: true, required: false
  private _primarySecureMeshSite = new CloudTransitGatewayAwsPrimarySecureMeshSiteOutputReference(this, "primary_secure_mesh_site");
  public get primarySecureMeshSite() {
    return this._primarySecureMeshSite;
  }
  public putPrimarySecureMeshSite(value: CloudTransitGatewayAwsPrimarySecureMeshSite) {
    this._primarySecureMeshSite.internalValue = value;
  }
  public resetPrimarySecureMeshSite() {
    this._primarySecureMeshSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySecureMeshSiteInput() {
    return this._primarySecureMeshSite.internalValue;
  }

  // service_vpc - computed: false, optional: false, required: true
  private _serviceVpc = new CloudTransitGatewayAwsServiceVpcOutputReference(this, "service_vpc");
  public get serviceVpc() {
    return this._serviceVpc;
  }
  public putServiceVpc(value: CloudTransitGatewayAwsServiceVpc) {
    this._serviceVpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVpcInput() {
    return this._serviceVpc.internalValue;
  }

  // tgw_cidr - computed: false, optional: true, required: false
  private _tgwCidr = new CloudTransitGatewayAwsTgwCidrOutputReference(this, "tgw_cidr");
  public get tgwCidr() {
    return this._tgwCidr;
  }
  public putTgwCidr(value: CloudTransitGatewayAwsTgwCidr) {
    this._tgwCidr.internalValue = value;
  }
  public resetTgwCidr() {
    this._tgwCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwCidrInput() {
    return this._tgwCidr.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway volterra_cloud_transit_gateway}
*/
export class CloudTransitGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_cloud_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudTransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudTransitGateway to import
  * @param importFromId The id of the existing CloudTransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudTransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_cloud_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_transit_gateway volterra_cloud_transit_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudTransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: CloudTransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_cloud_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._aws.internalValue = config.aws;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new CloudTransitGatewayAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: CloudTransitGatewayAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      aws: cloudTransitGatewayAwsToTerraform(this._aws.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: cloudTransitGatewayAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudTransitGatewayAwsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * user defined tag for the deployment, which is used while targeting set of devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#deployment_tag Deployment#deployment_tag}
  */
  readonly deploymentTag?: string;
  /**
  * user defined name for the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#project_id Deployment#project_id}
  */
  readonly projectId: string;
  /**
  * user defined title for the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
  /**
  * app_inst_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#app_inst_policies Deployment#app_inst_policies}
  */
  readonly appInstPolicies?: DeploymentAppInstPolicies[] | cdktf.IResolvable;
  /**
  * cluster_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#cluster_policy Deployment#cluster_policy}
  */
  readonly clusterPolicy?: DeploymentClusterPolicy[] | cdktf.IResolvable;
  /**
  * device_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#device_policies Deployment#device_policies}
  */
  readonly devicePolicies?: DeploymentDevicePolicies[] | cdktf.IResolvable;
  /**
  * edgeview_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#edgeview_policy Deployment#edgeview_policy}
  */
  readonly edgeviewPolicy?: DeploymentEdgeviewPolicy[] | cdktf.IResolvable;
  /**
  * integration_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#integration_policy Deployment#integration_policy}
  */
  readonly integrationPolicy?: DeploymentIntegrationPolicy[] | cdktf.IResolvable;
  /**
  * network_inst_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#network_inst_policies Deployment#network_inst_policies}
  */
  readonly networkInstPolicies?: DeploymentNetworkInstPolicies[] | cdktf.IResolvable;
  /**
  * volume_inst_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#volume_inst_policies Deployment#volume_inst_policies}
  */
  readonly volumeInstPolicies?: DeploymentVolumeInstPolicies[] | cdktf.IResolvable;
}
export interface DeploymentRevision {
}

export function deploymentRevisionToTerraform(struct?: DeploymentRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentRevisionToHclTerraform(struct?: DeploymentRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentRevisionOutputReference {
    return new DeploymentRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams {
  /**
  * Application port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#port Deployment#port}
  */
  readonly port?: number;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
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
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions {
  /**
  * ACE drop flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#drop Deployment#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * ACE limit flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limit Deployment#limit}
  */
  readonly limit?: boolean | cdktf.IResolvable;
  /**
  * ACE limit burst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitburst Deployment#limitburst}
  */
  readonly limitburst?: number;
  /**
  * ACE limit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitrate Deployment#limitrate}
  */
  readonly limitrate?: number;
  /**
  * ACE limit unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitunit Deployment#limitunit}
  */
  readonly limitunit?: string;
  /**
  * application port map flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#portmap Deployment#portmap}
  */
  readonly portmap?: boolean | cdktf.IResolvable;
  /**
  * mapparams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#mapparams Deployment#mapparams}
  */
  readonly mapparams?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.booleanToTerraform(struct!.drop),
    limit: cdktf.booleanToTerraform(struct!.limit),
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
    portmap: cdktf.booleanToTerraform(struct!.portmap),
    mapparams: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsToTerraform, true)(struct!.mapparams),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.booleanToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmap: {
      value: cdktf.booleanToHclTerraform(struct!.portmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapparams: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsToHclTerraform, true)(struct!.mapparams),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    if (this._portmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmap = this._portmap;
    }
    if (this._mapparams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapparams = this._mapparams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drop = undefined;
      this._limit = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
      this._portmap = undefined;
      this._mapparams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drop = value.drop;
      this._limit = value.limit;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
      this._portmap = value.portmap;
      this._mapparams.internalValue = value.mapparams;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: boolean | cdktf.IResolvable; 
  public get limit() {
    return this.getBooleanAttribute('limit');
  }
  public set limit(value: boolean | cdktf.IResolvable) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }

  // portmap - computed: false, optional: true, required: false
  private _portmap?: boolean | cdktf.IResolvable; 
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
  public set portmap(value: boolean | cdktf.IResolvable) {
    this._portmap = value;
  }
  public resetPortmap() {
    this._portmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmapInput() {
    return this._portmap;
  }

  // mapparams - computed: false, optional: true, required: false
  private _mapparams = new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparamsList(this, "mapparams", false);
  public get mapparams() {
    return this._mapparams;
  }
  public putMapparams(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsMapparams[] | cdktf.IResolvable) {
    this._mapparams.internalValue = value;
  }
  public resetMapparams() {
    this._mapparams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapparamsInput() {
    return this._mapparams.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches {
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfacesAcls {
  /**
  * User defined name of the app ACE, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#actions Deployment#actions}
  */
  readonly actions?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#matches Deployment#matches}
  */
  readonly matches?: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsToTerraform, true)(struct!.actions),
    matches: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesToTerraform, true)(struct!.matches),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesAclsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesAcls | cdktf.IResolvable): any {
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
    actions: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsList",
    },
    matches: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfacesAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matches.internalValue = value.matches;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // actions - computed: false, optional: true, required: false
  private _actions = new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAclsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesAclsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfacesAcls[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesAclsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers {
  /**
  * lisp credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#credential Deployment#credential}
  */
  readonly credential: string;
  /**
  * name/IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name_or_ip Deployment#name_or_ip}
  */
  readonly nameOrIp: string;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: false, required: true
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister {
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#display_name Deployment#display_name}
  */
  readonly displayName: string;
  /**
  * EID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#e_id Deployment#e_id}
  */
  readonly eId: string;
  /**
  * EID hash length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#e_id_hash_len Deployment#e_id_hash_len}
  */
  readonly eIdHashLen: number;
  /**
  * Lisp Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#lisp_instance Deployment#lisp_instance}
  */
  readonly lispInstance: number;
  /**
  * Lisp Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#lisp_signature Deployment#lisp_signature}
  */
  readonly lispSignature: string;
  /**
  * UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#uuid Deployment#uuid}
  */
  readonly uuid: string;
  /**
  * lisp_map_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#lisp_map_servers Deployment#lisp_map_servers}
  */
  readonly lispMapServers: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    e_id: cdktf.stringToTerraform(struct!.eId),
    e_id_hash_len: cdktf.numberToTerraform(struct!.eIdHashLen),
    lisp_instance: cdktf.numberToTerraform(struct!.lispInstance),
    lisp_signature: cdktf.stringToTerraform(struct!.lispSignature),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    lisp_map_servers: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersToTerraform, true)(struct!.lispMapServers),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id: {
      value: cdktf.stringToHclTerraform(struct!.eId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id_hash_len: {
      value: cdktf.numberToHclTerraform(struct!.eIdHashLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_instance: {
      value: cdktf.numberToHclTerraform(struct!.lispInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_signature: {
      value: cdktf.stringToHclTerraform(struct!.lispSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lisp_map_servers: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersToHclTerraform, true)(struct!.lispMapServers),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._eId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eId = this._eId;
    }
    if (this._eIdHashLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eIdHashLen = this._eIdHashLen;
    }
    if (this._lispInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispInstance = this._lispInstance;
    }
    if (this._lispSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispSignature = this._lispSignature;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lispMapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispMapServers = this._lispMapServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._eId = undefined;
      this._eIdHashLen = undefined;
      this._lispInstance = undefined;
      this._lispSignature = undefined;
      this._uuid = undefined;
      this._lispMapServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._eId = value.eId;
      this._eIdHashLen = value.eIdHashLen;
      this._lispInstance = value.lispInstance;
      this._lispSignature = value.lispSignature;
      this._uuid = value.uuid;
      this._lispMapServers.internalValue = value.lispMapServers;
    }
  }

  // app_cert - computed: true, optional: false, required: false
  public get appCert() {
    return this.getStringAttribute('app_cert');
  }

  // app_private_key - computed: true, optional: false, required: false
  public get appPrivateKey() {
    return this.getStringAttribute('app_private_key');
  }

  // app_public_key - computed: true, optional: false, required: false
  public get appPublicKey() {
    return this.getStringAttribute('app_public_key');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // e_id - computed: false, optional: false, required: true
  private _eId?: string; 
  public get eId() {
    return this.getStringAttribute('e_id');
  }
  public set eId(value: string) {
    this._eId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdInput() {
    return this._eId;
  }

  // e_id_hash_len - computed: false, optional: false, required: true
  private _eIdHashLen?: number; 
  public get eIdHashLen() {
    return this.getNumberAttribute('e_id_hash_len');
  }
  public set eIdHashLen(value: number) {
    this._eIdHashLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdHashLenInput() {
    return this._eIdHashLen;
  }

  // lisp_instance - computed: false, optional: false, required: true
  private _lispInstance?: number; 
  public get lispInstance() {
    return this.getNumberAttribute('lisp_instance');
  }
  public set lispInstance(value: number) {
    this._lispInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInstanceInput() {
    return this._lispInstance;
  }

  // lisp_signature - computed: false, optional: false, required: true
  private _lispSignature?: string; 
  public get lispSignature() {
    return this.getStringAttribute('lisp_signature');
  }
  public set lispSignature(value: string) {
    this._lispSignature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispSignatureInput() {
    return this._lispSignature;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // lisp_map_servers - computed: false, optional: false, required: true
  private _lispMapServers = new DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServersList(this, "lisp_map_servers", false);
  public get lispMapServers() {
    return this._lispMapServers;
  }
  public putLispMapServers(value: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterLispMapServers[] | cdktf.IResolvable) {
    this._lispMapServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispMapServersInput() {
    return this._lispMapServers.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfacesIo {
  /**
  * Physical Adapter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * IoType specifies the type of the Input output of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesIoToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesIoToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfacesIo | cdktf.IResolvable): any {
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesIoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfacesIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfacesIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._type = value.type;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesIoList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfacesIo[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesIoOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesIoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigInterfaces {
  /**
  * access port VLAN ID, vlan id of zero will be treated as trunk port and vlan id 1 is implicitly used by linux bridges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#access_vlan_id Deployment#access_vlan_id}
  */
  readonly accessVlanId?: number;
  /**
  * default instance flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#default_net_instance Deployment#default_net_instance}
  */
  readonly defaultNetInstance?: boolean | cdktf.IResolvable;
  /**
  * direct attach flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#directattach Deployment#directattach}
  */
  readonly directattach?: boolean | cdktf.IResolvable;
  /**
  * intf Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#intfname Deployment#intfname}
  */
  readonly intfname: string;
  /**
  * intforder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#intforder Deployment#intforder}
  */
  readonly intforder?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ipaddr Deployment#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#macaddr Deployment#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Network Instance name to be matched for interface assignment. Applicable only when "direct attach" flag is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#netinstname Deployment#netinstname}
  */
  readonly netinstname: string;
  /**
  * Network Instance tag to be matched for interface assignment. Applicable only when "direct attach" flag is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#netinsttag Deployment#netinsttag}
  */
  readonly netinsttag?: { [key: string]: string };
  /**
  * network name: will be deprecated in future, use netinstname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#netname Deployment#netname}
  */
  readonly netname?: string;
  /**
  * Private IP flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#privateip Deployment#privateip}
  */
  readonly privateip: boolean | cdktf.IResolvable;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#acls Deployment#acls}
  */
  readonly acls?: DeploymentAppInstPoliciesAppInstConfigInterfacesAcls[] | cdktf.IResolvable;
  /**
  * eidregister block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#eidregister Deployment#eidregister}
  */
  readonly eidregister?: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister[] | cdktf.IResolvable;
  /**
  * io block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#io Deployment#io}
  */
  readonly io?: DeploymentAppInstPoliciesAppInstConfigInterfacesIo[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigInterfacesToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_vlan_id: cdktf.numberToTerraform(struct!.accessVlanId),
    default_net_instance: cdktf.booleanToTerraform(struct!.defaultNetInstance),
    directattach: cdktf.booleanToTerraform(struct!.directattach),
    intfname: cdktf.stringToTerraform(struct!.intfname),
    intforder: cdktf.numberToTerraform(struct!.intforder),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    netinstname: cdktf.stringToTerraform(struct!.netinstname),
    netinsttag: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.netinsttag),
    netname: cdktf.stringToTerraform(struct!.netname),
    privateip: cdktf.booleanToTerraform(struct!.privateip),
    acls: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesAclsToTerraform, true)(struct!.acls),
    eidregister: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterToTerraform, true)(struct!.eidregister),
    io: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesIoToTerraform, true)(struct!.io),
  }
}


export function deploymentAppInstPoliciesAppInstConfigInterfacesToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.accessVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_net_instance: {
      value: cdktf.booleanToHclTerraform(struct!.defaultNetInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    directattach: {
      value: cdktf.booleanToHclTerraform(struct!.directattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intfname: {
      value: cdktf.stringToHclTerraform(struct!.intfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intforder: {
      value: cdktf.numberToHclTerraform(struct!.intforder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netinstname: {
      value: cdktf.stringToHclTerraform(struct!.netinstname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netinsttag: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.netinsttag),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    netname: {
      value: cdktf.stringToHclTerraform(struct!.netname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privateip: {
      value: cdktf.booleanToHclTerraform(struct!.privateip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    acls: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesAclsToHclTerraform, true)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesAclsList",
    },
    eidregister: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesEidregisterToHclTerraform, true)(struct!.eidregister),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterList",
    },
    io: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesIoToHclTerraform, true)(struct!.io),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesIoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessVlanId = this._accessVlanId;
    }
    if (this._defaultNetInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNetInstance = this._defaultNetInstance;
    }
    if (this._directattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.directattach = this._directattach;
    }
    if (this._intfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfname = this._intfname;
    }
    if (this._intforder !== undefined) {
      hasAnyValues = true;
      internalValueResult.intforder = this._intforder;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._netinstname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netinstname = this._netinstname;
    }
    if (this._netinsttag !== undefined) {
      hasAnyValues = true;
      internalValueResult.netinsttag = this._netinsttag;
    }
    if (this._netname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netname = this._netname;
    }
    if (this._privateip !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateip = this._privateip;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    if (this._eidregister?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidregister = this._eidregister?.internalValue;
    }
    if (this._io?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.io = this._io?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessVlanId = undefined;
      this._defaultNetInstance = undefined;
      this._directattach = undefined;
      this._intfname = undefined;
      this._intforder = undefined;
      this._ipaddr = undefined;
      this._macaddr = undefined;
      this._netinstname = undefined;
      this._netinsttag = undefined;
      this._netname = undefined;
      this._privateip = undefined;
      this._acls.internalValue = undefined;
      this._eidregister.internalValue = undefined;
      this._io.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessVlanId = value.accessVlanId;
      this._defaultNetInstance = value.defaultNetInstance;
      this._directattach = value.directattach;
      this._intfname = value.intfname;
      this._intforder = value.intforder;
      this._ipaddr = value.ipaddr;
      this._macaddr = value.macaddr;
      this._netinstname = value.netinstname;
      this._netinsttag = value.netinsttag;
      this._netname = value.netname;
      this._privateip = value.privateip;
      this._acls.internalValue = value.acls;
      this._eidregister.internalValue = value.eidregister;
      this._io.internalValue = value.io;
    }
  }

  // access_vlan_id - computed: false, optional: true, required: false
  private _accessVlanId?: number; 
  public get accessVlanId() {
    return this.getNumberAttribute('access_vlan_id');
  }
  public set accessVlanId(value: number) {
    this._accessVlanId = value;
  }
  public resetAccessVlanId() {
    this._accessVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanIdInput() {
    return this._accessVlanId;
  }

  // default_net_instance - computed: false, optional: true, required: false
  private _defaultNetInstance?: boolean | cdktf.IResolvable; 
  public get defaultNetInstance() {
    return this.getBooleanAttribute('default_net_instance');
  }
  public set defaultNetInstance(value: boolean | cdktf.IResolvable) {
    this._defaultNetInstance = value;
  }
  public resetDefaultNetInstance() {
    this._defaultNetInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetInstanceInput() {
    return this._defaultNetInstance;
  }

  // directattach - computed: false, optional: true, required: false
  private _directattach?: boolean | cdktf.IResolvable; 
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }
  public set directattach(value: boolean | cdktf.IResolvable) {
    this._directattach = value;
  }
  public resetDirectattach() {
    this._directattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directattachInput() {
    return this._directattach;
  }

  // intfname - computed: false, optional: false, required: true
  private _intfname?: string; 
  public get intfname() {
    return this.getStringAttribute('intfname');
  }
  public set intfname(value: string) {
    this._intfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfnameInput() {
    return this._intfname;
  }

  // intforder - computed: false, optional: true, required: false
  private _intforder?: number; 
  public get intforder() {
    return this.getNumberAttribute('intforder');
  }
  public set intforder(value: number) {
    this._intforder = value;
  }
  public resetIntforder() {
    this._intforder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intforderInput() {
    return this._intforder;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // netinstid - computed: true, optional: false, required: false
  public get netinstid() {
    return this.getStringAttribute('netinstid');
  }

  // netinstname - computed: false, optional: false, required: true
  private _netinstname?: string; 
  public get netinstname() {
    return this.getStringAttribute('netinstname');
  }
  public set netinstname(value: string) {
    this._netinstname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netinstnameInput() {
    return this._netinstname;
  }

  // netinsttag - computed: false, optional: true, required: false
  private _netinsttag?: { [key: string]: string }; 
  public get netinsttag() {
    return this.getStringMapAttribute('netinsttag');
  }
  public set netinsttag(value: { [key: string]: string }) {
    this._netinsttag = value;
  }
  public resetNetinsttag() {
    this._netinsttag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netinsttagInput() {
    return this._netinsttag;
  }

  // netname - computed: false, optional: true, required: false
  private _netname?: string; 
  public get netname() {
    return this.getStringAttribute('netname');
  }
  public set netname(value: string) {
    this._netname = value;
  }
  public resetNetname() {
    this._netname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netnameInput() {
    return this._netname;
  }

  // privateip - computed: false, optional: false, required: true
  private _privateip?: boolean | cdktf.IResolvable; 
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
  public set privateip(value: boolean | cdktf.IResolvable) {
    this._privateip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
  }

  // acls - computed: false, optional: true, required: false
  private _acls = new DeploymentAppInstPoliciesAppInstConfigInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: DeploymentAppInstPoliciesAppInstConfigInterfacesAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // eidregister - computed: false, optional: true, required: false
  private _eidregister = new DeploymentAppInstPoliciesAppInstConfigInterfacesEidregisterList(this, "eidregister", false);
  public get eidregister() {
    return this._eidregister;
  }
  public putEidregister(value: DeploymentAppInstPoliciesAppInstConfigInterfacesEidregister[] | cdktf.IResolvable) {
    this._eidregister.internalValue = value;
  }
  public resetEidregister() {
    this._eidregister.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eidregisterInput() {
    return this._eidregister.internalValue;
  }

  // io - computed: false, optional: true, required: false
  private _io = new DeploymentAppInstPoliciesAppInstConfigInterfacesIoList(this, "io", false);
  public get io() {
    return this._io;
  }
  public putIo(value: DeploymentAppInstPoliciesAppInstConfigInterfacesIo[] | cdktf.IResolvable) {
    this._io.internalValue = value;
  }
  public resetIo() {
    this._io.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioInput() {
    return this._io.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigInterfacesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigInterfacesOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigLogs {
  /**
  * Flags to enable / disable sending of logs generated by app instance to zedcloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#access Deployment#access}
  */
  readonly access: boolean | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigLogsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.booleanToTerraform(struct!.access),
  }
}


export function deploymentAppInstPoliciesAppInstConfigLogsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.booleanToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: boolean | cdktf.IResolvable; 
  public get access() {
    return this.getBooleanAttribute('access');
  }
  public set access(value: boolean | cdktf.IResolvable) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigLogsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigLogs[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigLogsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions {
  /**
  * Display label of the key in User-Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#label Deployment#label}
  */
  readonly label?: string;
  /**
  * Value of the key to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables {
  /**
  * Default value of the variable. (Optional. Default: <Default value based on type>)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#default Deployment#default}
  */
  readonly default?: string;
  /**
  * Encoding of file content. Applicable if format is VARIABLE_FORMAT_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#encode Deployment#encode}
  */
  readonly encode?: string;
  /**
  * Format of the user variable. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#format Deployment#format}
  */
  readonly format: string;
  /**
  * Label for the variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#label Deployment#label}
  */
  readonly label: string;
  /**
  * Max length of the value of the variable(Optional. Default: 1024)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#max_length Deployment#max_length}
  */
  readonly maxLength?: string;
  /**
  * Name of the Variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#process_input Deployment#process_input}
  */
  readonly processInput?: string;
  /**
  * This variable MUST be specified when creating an App Instance. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#required Deployment#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
  /**
  * User-specified value of the variable.(Required if required is true. Optional otherwise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#options Deployment#options}
  */
  readonly options?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    encode: cdktf.stringToTerraform(struct!.encode),
    format: cdktf.stringToTerraform(struct!.format),
    label: cdktf.stringToTerraform(struct!.label),
    max_length: cdktf.stringToTerraform(struct!.maxLength),
    name: cdktf.stringToTerraform(struct!.name),
    process_input: cdktf.stringToTerraform(struct!.processInput),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform, true)(struct!.options),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encode: {
      value: cdktf.stringToHclTerraform(struct!.encode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.stringToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_input: {
      value: cdktf.stringToHclTerraform(struct!.processInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._encode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encode = this._encode;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInput = this._processInput;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._encode = undefined;
      this._format = undefined;
      this._label = undefined;
      this._maxLength = undefined;
      this._name = undefined;
      this._processInput = undefined;
      this._required = undefined;
      this._type = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._encode = value.encode;
      this._format = value.format;
      this._label = value.label;
      this._maxLength = value.maxLength;
      this._name = value.name;
      this._processInput = value.processInput;
      this._required = value.required;
      this._type = value.type;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // encode - computed: false, optional: true, required: false
  private _encode?: string; 
  public get encode() {
    return this.getStringAttribute('encode');
  }
  public set encode(value: string) {
    this._encode = value;
  }
  public resetEncode() {
    this._encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeInput() {
    return this._encode;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
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

  // process_input - computed: false, optional: true, required: false
  private _processInput?: string; 
  public get processInput() {
    return this.getStringAttribute('process_input');
  }
  public set processInput(value: string) {
    this._processInput = value;
  }
  public resetProcessInput() {
    this._processInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInputInput() {
    return this._processInput;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups {
  /**
  * Name of the Variable Group(Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Indicates if the variable group is required to be specified for the App Instance. (Optional. Default:False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#required Deployment#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#condition Deployment#condition}
  */
  readonly condition?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#variables Deployment#variables}
  */
  readonly variables?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    condition: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToTerraform, true)(struct!.condition),
    variables: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToTerraform, true)(struct!.variables),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionList",
    },
    variables: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._condition.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
      this._condition.internalValue = value.condition;
      this._variables.internalValue = value.variables;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig {
  /**
  * Add the Custom Config to App Instance (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#add Deployment#add}
  */
  readonly add?: boolean | cdktf.IResolvable;
  /**
  * Allow Appinstance storage to be resized after app instance is created. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allow_storage_resize Deployment#allow_storage_resize}
  */
  readonly allowStorageResize?: boolean | cdktf.IResolvable;
  /**
  * Field delimiter used in specifying variables in template. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#field_delimiter Deployment#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Name of CustomConfig (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Override existing custom config from App Bundle Manifest (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#override Deployment#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * base64 encrypted template string. (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#template Deployment#template}
  */
  readonly template?: string;
  /**
  * variable_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#variable_groups Deployment#variable_groups}
  */
  readonly variableGroups?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    allow_storage_resize: cdktf.booleanToTerraform(struct!.allowStorageResize),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    template: cdktf.stringToTerraform(struct!.template),
    variable_groups: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsToTerraform, true)(struct!.variableGroups),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.booleanToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_storage_resize: {
      value: cdktf.booleanToHclTerraform(struct!.allowStorageResize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_groups: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsToHclTerraform, true)(struct!.variableGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._allowStorageResize !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStorageResize = this._allowStorageResize;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._variableGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableGroups = this._variableGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._allowStorageResize = undefined;
      this._fieldDelimiter = undefined;
      this._name = undefined;
      this._override = undefined;
      this._template = undefined;
      this._variableGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._allowStorageResize = value.allowStorageResize;
      this._fieldDelimiter = value.fieldDelimiter;
      this._name = value.name;
      this._override = value.override;
      this._template = value.template;
      this._variableGroups.internalValue = value.variableGroups;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: boolean | cdktf.IResolvable; 
  public get add() {
    return this.getBooleanAttribute('add');
  }
  public set add(value: boolean | cdktf.IResolvable) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // allow_storage_resize - computed: false, optional: true, required: false
  private _allowStorageResize?: boolean | cdktf.IResolvable; 
  public get allowStorageResize() {
    return this.getBooleanAttribute('allow_storage_resize');
  }
  public set allowStorageResize(value: boolean | cdktf.IResolvable) {
    this._allowStorageResize = value;
  }
  public resetAllowStorageResize() {
    this._allowStorageResize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStorageResizeInput() {
    return this._allowStorageResize;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // variable_groups - computed: false, optional: true, required: false
  private _variableGroups = new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
  public putVariableGroups(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable) {
    this._variableGroups.internalValue = value;
  }
  public resetVariableGroups() {
    this._variableGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableGroupsInput() {
    return this._variableGroups.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration {
  /**
  * custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#custom_config Deployment#custom_config}
  */
  readonly customConfig?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_config: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigToTerraform, true)(struct!.customConfig),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_config: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigToHclTerraform, true)(struct!.customConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = value.customConfig;
    }
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationCustomConfig[] | cdktf.IResolvable) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail {
  /**
  * Create options direct the creation of the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#container_create_option Deployment#container_create_option}
  */
  readonly containerCreateOption?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_create_option: cdktf.stringToTerraform(struct!.containerCreateOption),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_create_option: {
      value: cdktf.stringToHclTerraform(struct!.containerCreateOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerCreateOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerCreateOption = this._containerCreateOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerCreateOption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerCreateOption = value.containerCreateOption;
    }
  }

  // container_create_option - computed: false, optional: true, required: false
  private _containerCreateOption?: string; 
  public get containerCreateOption() {
    return this.getStringAttribute('container_create_option');
  }
  public set containerCreateOption(value: string) {
    this._containerCreateOption = value;
  }
  public resetContainerCreateOption() {
    this._containerCreateOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCreateOptionInput() {
    return this._containerCreateOption;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc {
  /**
  * UI map: AppEditPage:DeveloperPane:Developer_Agreement_Field, AppDetailsPage:DeveloperPane:Developer_Agreement_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#agreement_list Deployment#agreement_list}
  */
  readonly agreementList?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#app_category Deployment#app_category}
  */
  readonly appCategory: string;
  /**
  * UI map: AppMarketplacePage:AppCard:DescriptionField, AppEditPage:IdentityPane:CategoryField, AppDetailsPage:IdentityPane:CategoryField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#category Deployment#category}
  */
  readonly category?: string;
  /**
  * UI map: AppMarketplacePage:AppCard:License, AppEditPage:IdentityPane:License, AppDetailsPage:IdentityPane:License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#license_list Deployment#license_list}
  */
  readonly licenseList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:IdentityPane:Logo, AppDetailsPage:IdentityPane:Logo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#logo Deployment#logo}
  */
  readonly logo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#os Deployment#os}
  */
  readonly os?: string;
  /**
  * UI map: AppEditPage:IdentityPane:Screenshot_Fields, AppDetailsPage:IdentityPane:Screenshot_Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#screenshot_list Deployment#screenshot_list}
  */
  readonly screenshotList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:DeveloperPane:Support_Description_Field, AppDetailsPage:DeveloperPane:Support_Description_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#support Deployment#support}
  */
  readonly support?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonDescToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agreement_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.agreementList),
    app_category: cdktf.stringToTerraform(struct!.appCategory),
    category: cdktf.stringToTerraform(struct!.category),
    license_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.licenseList),
    logo: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logo),
    os: cdktf.stringToTerraform(struct!.os),
    screenshot_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.screenshotList),
    support: cdktf.stringToTerraform(struct!.support),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonDescToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agreement_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.agreementList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_category: {
      value: cdktf.stringToHclTerraform(struct!.appCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.licenseList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logo: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    screenshot_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.screenshotList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    support: {
      value: cdktf.stringToHclTerraform(struct!.support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonDescOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agreementList !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreementList = this._agreementList;
    }
    if (this._appCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCategory = this._appCategory;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._licenseList !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseList = this._licenseList;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._screenshotList !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenshotList = this._screenshotList;
    }
    if (this._support !== undefined) {
      hasAnyValues = true;
      internalValueResult.support = this._support;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agreementList = undefined;
      this._appCategory = undefined;
      this._category = undefined;
      this._licenseList = undefined;
      this._logo = undefined;
      this._os = undefined;
      this._screenshotList = undefined;
      this._support = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agreementList = value.agreementList;
      this._appCategory = value.appCategory;
      this._category = value.category;
      this._licenseList = value.licenseList;
      this._logo = value.logo;
      this._os = value.os;
      this._screenshotList = value.screenshotList;
      this._support = value.support;
    }
  }

  // agreement_list - computed: false, optional: true, required: false
  private _agreementList?: { [key: string]: string }; 
  public get agreementList() {
    return this.getStringMapAttribute('agreement_list');
  }
  public set agreementList(value: { [key: string]: string }) {
    this._agreementList = value;
  }
  public resetAgreementList() {
    this._agreementList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementListInput() {
    return this._agreementList;
  }

  // app_category - computed: false, optional: false, required: true
  private _appCategory?: string; 
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }
  public set appCategory(value: string) {
    this._appCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // license_list - computed: false, optional: true, required: false
  private _licenseList?: { [key: string]: string }; 
  public get licenseList() {
    return this.getStringMapAttribute('license_list');
  }
  public set licenseList(value: { [key: string]: string }) {
    this._licenseList = value;
  }
  public resetLicenseList() {
    this._licenseList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseListInput() {
    return this._licenseList;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: { [key: string]: string }; 
  public get logo() {
    return this.getStringMapAttribute('logo');
  }
  public set logo(value: { [key: string]: string }) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // screenshot_list - computed: false, optional: true, required: false
  private _screenshotList?: { [key: string]: string }; 
  public get screenshotList() {
    return this.getStringMapAttribute('screenshot_list');
  }
  public set screenshotList(value: { [key: string]: string }) {
    this._screenshotList = value;
  }
  public resetScreenshotList() {
    this._screenshotList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenshotListInput() {
    return this._screenshotList;
  }

  // support - computed: false, optional: true, required: false
  private _support?: string; 
  public get support() {
    return this.getStringAttribute('support');
  }
  public set support(value: string) {
    this._support = value;
  }
  public resetSupport() {
    this._support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonDescList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonDescOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams {
  /**
  * Name of the Parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Value of the parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonImages {
  /**
  * UI map: AppEditPage:DrivesPane:Cleartext, AppDetailsPage:DrivesPane:ClearText_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#cleartext Deployment#cleartext}
  */
  readonly cleartext?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Drive_Type_Field, AppDetailsPage:DrivesPane:Drive_Type_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#drvtype Deployment#drvtype}
  */
  readonly drvtype?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Ignorepurge, AppDetailsPage:DrivesPane:Ignorepurgee_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ignorepurge Deployment#ignorepurge}
  */
  readonly ignorepurge?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Format_Field, AppDetailsPage:DrivesPane:Image_Format_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#imageformat Deployment#imageformat}
  */
  readonly imageformat?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_ID_Field, AppDetailsPage:DrivesPane:Image_ID_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#imageid Deployment#imageid}
  */
  readonly imageid?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Name_Field, AppDetailsPage:DrivesPane:Image_Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#imagename Deployment#imagename}
  */
  readonly imagename?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Max_Size_Field, AppDetailsPage:DrivesPane:Max_Size_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#maxsize Deployment#maxsize}
  */
  readonly maxsize?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Mountpath, AppDetailsPage:DrivesPane:Mountpath_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#mountpath Deployment#mountpath}
  */
  readonly mountpath?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Preserve_Field, AppDetailsPage:DrivesPane:Preserve_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#preserve Deployment#preserve}
  */
  readonly preserve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#readonly Deployment#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Target_Field, AppDetailsPage:DrivesPane:Target_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#target Deployment#target}
  */
  readonly target?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Volume_Label, AppDetailsPage:DrivesPane:Volume_Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#volumelabel Deployment#volumelabel}
  */
  readonly volumelabel?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#params Deployment#params}
  */
  readonly params?: DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonImagesToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.booleanToTerraform(struct!.cleartext),
    drvtype: cdktf.stringToTerraform(struct!.drvtype),
    ignorepurge: cdktf.booleanToTerraform(struct!.ignorepurge),
    imageformat: cdktf.stringToTerraform(struct!.imageformat),
    imageid: cdktf.stringToTerraform(struct!.imageid),
    imagename: cdktf.stringToTerraform(struct!.imagename),
    maxsize: cdktf.stringToTerraform(struct!.maxsize),
    mountpath: cdktf.stringToTerraform(struct!.mountpath),
    preserve: cdktf.booleanToTerraform(struct!.preserve),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    target: cdktf.stringToTerraform(struct!.target),
    volumelabel: cdktf.stringToTerraform(struct!.volumelabel),
    params: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsToTerraform, true)(struct!.params),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonImagesToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleartext: {
      value: cdktf.booleanToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drvtype: {
      value: cdktf.stringToHclTerraform(struct!.drvtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignorepurge: {
      value: cdktf.booleanToHclTerraform(struct!.ignorepurge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imageformat: {
      value: cdktf.stringToHclTerraform(struct!.imageformat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imageid: {
      value: cdktf.stringToHclTerraform(struct!.imageid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagename: {
      value: cdktf.stringToHclTerraform(struct!.imagename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxsize: {
      value: cdktf.stringToHclTerraform(struct!.maxsize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mountpath: {
      value: cdktf.stringToHclTerraform(struct!.mountpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve: {
      value: cdktf.booleanToHclTerraform(struct!.preserve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumelabel: {
      value: cdktf.stringToHclTerraform(struct!.volumelabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    if (this._drvtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.drvtype = this._drvtype;
    }
    if (this._ignorepurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorepurge = this._ignorepurge;
    }
    if (this._imageformat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageformat = this._imageformat;
    }
    if (this._imageid !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageid = this._imageid;
    }
    if (this._imagename !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagename = this._imagename;
    }
    if (this._maxsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxsize = this._maxsize;
    }
    if (this._mountpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountpath = this._mountpath;
    }
    if (this._preserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserve = this._preserve;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._volumelabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumelabel = this._volumelabel;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleartext = undefined;
      this._drvtype = undefined;
      this._ignorepurge = undefined;
      this._imageformat = undefined;
      this._imageid = undefined;
      this._imagename = undefined;
      this._maxsize = undefined;
      this._mountpath = undefined;
      this._preserve = undefined;
      this._readonly = undefined;
      this._target = undefined;
      this._volumelabel = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleartext = value.cleartext;
      this._drvtype = value.drvtype;
      this._ignorepurge = value.ignorepurge;
      this._imageformat = value.imageformat;
      this._imageid = value.imageid;
      this._imagename = value.imagename;
      this._maxsize = value.maxsize;
      this._mountpath = value.mountpath;
      this._preserve = value.preserve;
      this._readonly = value.readonly;
      this._target = value.target;
      this._volumelabel = value.volumelabel;
      this._params.internalValue = value.params;
    }
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: boolean | cdktf.IResolvable; 
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }
  public set cleartext(value: boolean | cdktf.IResolvable) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // drvtype - computed: false, optional: true, required: false
  private _drvtype?: string; 
  public get drvtype() {
    return this.getStringAttribute('drvtype');
  }
  public set drvtype(value: string) {
    this._drvtype = value;
  }
  public resetDrvtype() {
    this._drvtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drvtypeInput() {
    return this._drvtype;
  }

  // ignorepurge - computed: false, optional: true, required: false
  private _ignorepurge?: boolean | cdktf.IResolvable; 
  public get ignorepurge() {
    return this.getBooleanAttribute('ignorepurge');
  }
  public set ignorepurge(value: boolean | cdktf.IResolvable) {
    this._ignorepurge = value;
  }
  public resetIgnorepurge() {
    this._ignorepurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorepurgeInput() {
    return this._ignorepurge;
  }

  // imageformat - computed: false, optional: true, required: false
  private _imageformat?: string; 
  public get imageformat() {
    return this.getStringAttribute('imageformat');
  }
  public set imageformat(value: string) {
    this._imageformat = value;
  }
  public resetImageformat() {
    this._imageformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageformatInput() {
    return this._imageformat;
  }

  // imageid - computed: true, optional: true, required: false
  private _imageid?: string; 
  public get imageid() {
    return this.getStringAttribute('imageid');
  }
  public set imageid(value: string) {
    this._imageid = value;
  }
  public resetImageid() {
    this._imageid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageidInput() {
    return this._imageid;
  }

  // imagename - computed: false, optional: true, required: false
  private _imagename?: string; 
  public get imagename() {
    return this.getStringAttribute('imagename');
  }
  public set imagename(value: string) {
    this._imagename = value;
  }
  public resetImagename() {
    this._imagename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagenameInput() {
    return this._imagename;
  }

  // maxsize - computed: false, optional: true, required: false
  private _maxsize?: string; 
  public get maxsize() {
    return this.getStringAttribute('maxsize');
  }
  public set maxsize(value: string) {
    this._maxsize = value;
  }
  public resetMaxsize() {
    this._maxsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsizeInput() {
    return this._maxsize;
  }

  // mountpath - computed: false, optional: true, required: false
  private _mountpath?: string; 
  public get mountpath() {
    return this.getStringAttribute('mountpath');
  }
  public set mountpath(value: string) {
    this._mountpath = value;
  }
  public resetMountpath() {
    this._mountpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountpathInput() {
    return this._mountpath;
  }

  // preserve - computed: false, optional: true, required: false
  private _preserve?: boolean | cdktf.IResolvable; 
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }
  public set preserve(value: boolean | cdktf.IResolvable) {
    this._preserve = value;
  }
  public resetPreserve() {
    this._preserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveInput() {
    return this._preserve;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // volumelabel - computed: false, optional: true, required: false
  private _volumelabel?: string; 
  public get volumelabel() {
    return this.getStringAttribute('volumelabel');
  }
  public set volumelabel(value: string) {
    this._volumelabel = value;
  }
  public resetVolumelabel() {
    this._volumelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumelabelInput() {
    return this._volumelabel;
  }

  // params - computed: false, optional: true, required: false
  private _params = new DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonImages[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue {
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitburst Deployment#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitrate Deployment#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitunit Deployment#limitunit}
  */
  readonly limitunit?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
    }
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto {
  /**
  * Application Port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#app_port Deployment#app_port}
  */
  readonly appPort?: number;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_port: cdktf.numberToTerraform(struct!.appPort),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_port: {
      value: cdktf.numberToHclTerraform(struct!.appPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPort = this._appPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appPort = value.appPort;
    }
  }

  // app_port - computed: false, optional: true, required: false
  private _appPort?: number; 
  public get appPort() {
    return this.getNumberAttribute('app_port');
  }
  public set appPort(value: number) {
    this._appPort = value;
  }
  public resetAppPort() {
    this._appPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPortInput() {
    return this._appPort;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions {
  /**
  * Drop the packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#drop Deployment#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limit Deployment#limit}
  */
  readonly limit?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitburst Deployment#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitrate Deployment#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limitunit Deployment#limitunit}
  */
  readonly limitunit?: string;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#portmap Deployment#portmap}
  */
  readonly portmap?: boolean | cdktf.IResolvable;
  /**
  * limit_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#limit_value Deployment#limit_value}
  */
  readonly limitValue?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable;
  /**
  * portmapto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#portmapto Deployment#portmapto}
  */
  readonly portmapto?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.booleanToTerraform(struct!.drop),
    limit: cdktf.booleanToTerraform(struct!.limit),
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
    portmap: cdktf.booleanToTerraform(struct!.portmap),
    limit_value: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueToTerraform, true)(struct!.limitValue),
    portmapto: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoToTerraform, true)(struct!.portmapto),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.booleanToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmap: {
      value: cdktf.booleanToHclTerraform(struct!.portmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_value: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueToHclTerraform, true)(struct!.limitValue),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueList",
    },
    portmapto: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoToHclTerraform, true)(struct!.portmapto),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    if (this._portmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmap = this._portmap;
    }
    if (this._limitValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitValue = this._limitValue?.internalValue;
    }
    if (this._portmapto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmapto = this._portmapto?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drop = undefined;
      this._limit = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
      this._portmap = undefined;
      this._limitValue.internalValue = undefined;
      this._portmapto.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drop = value.drop;
      this._limit = value.limit;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
      this._portmap = value.portmap;
      this._limitValue.internalValue = value.limitValue;
      this._portmapto.internalValue = value.portmapto;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: boolean | cdktf.IResolvable; 
  public get limit() {
    return this.getBooleanAttribute('limit');
  }
  public set limit(value: boolean | cdktf.IResolvable) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }

  // portmap - computed: false, optional: true, required: false
  private _portmap?: boolean | cdktf.IResolvable; 
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
  public set portmap(value: boolean | cdktf.IResolvable) {
    this._portmap = value;
  }
  public resetPortmap() {
    this._portmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmapInput() {
    return this._portmap;
  }

  // limit_value - computed: false, optional: true, required: false
  private _limitValue = new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValueList(this, "limit_value", false);
  public get limitValue() {
    return this._limitValue;
  }
  public putLimitValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsLimitValue[] | cdktf.IResolvable) {
    this._limitValue.internalValue = value;
  }
  public resetLimitValue() {
    this._limitValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitValueInput() {
    return this._limitValue.internalValue;
  }

  // portmapto - computed: false, optional: true, required: false
  private _portmapto = new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
  public putPortmapto(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsPortmapto[] | cdktf.IResolvable) {
    this._portmapto.internalValue = value;
  }
  public resetPortmapto() {
    this._portmapto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmaptoInput() {
    return this._portmapto.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches {
  /**
  * Type of Match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
  /**
  * Value of match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls {
  /**
  * Name of the Access Control List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#actions Deployment#actions}
  */
  readonly actions?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#matches Deployment#matches}
  */
  readonly matches?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsToTerraform, true)(struct!.actions),
    matches: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesToTerraform, true)(struct!.matches),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls | cdktf.IResolvable): any {
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
    actions: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsList",
    },
    matches: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matches.internalValue = value.matches;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces {
  /**
  * If true, a physical adapter is assigned to the edge application directly. If false, a network instance is assigned to the edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#directattach Deployment#directattach}
  */
  readonly directattach?: boolean | cdktf.IResolvable;
  /**
  * Interface name used by the edge application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Indicates if the interface is optional for edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#optional Deployment#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * If true, DHCP network can't be assigned and user needs to provide a static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#privateip Deployment#privateip}
  */
  readonly privateip?: boolean | cdktf.IResolvable;
  /**
  * Physical Adapter type for this interface. Applicable only when "direct attach" flag is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#acls Deployment#acls}
  */
  readonly acls?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directattach: cdktf.booleanToTerraform(struct!.directattach),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    privateip: cdktf.booleanToTerraform(struct!.privateip),
    type: cdktf.stringToTerraform(struct!.type),
    acls: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsToTerraform, true)(struct!.acls),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directattach: {
      value: cdktf.booleanToHclTerraform(struct!.directattach),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privateip: {
      value: cdktf.booleanToHclTerraform(struct!.privateip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acls: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsToHclTerraform, true)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.directattach = this._directattach;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._privateip !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateip = this._privateip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directattach = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._privateip = undefined;
      this._type = undefined;
      this._acls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directattach = value.directattach;
      this._name = value.name;
      this._optional = value.optional;
      this._privateip = value.privateip;
      this._type = value.type;
      this._acls.internalValue = value.acls;
    }
  }

  // directattach - computed: false, optional: true, required: false
  private _directattach?: boolean | cdktf.IResolvable; 
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }
  public set directattach(value: boolean | cdktf.IResolvable) {
    this._directattach = value;
  }
  public resetDirectattach() {
    this._directattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directattachInput() {
    return this._directattach;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // privateip - computed: false, optional: true, required: false
  private _privateip?: boolean | cdktf.IResolvable; 
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
  public set privateip(value: boolean | cdktf.IResolvable) {
    this._privateip = value;
  }
  public resetPrivateip() {
    this._privateip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // acls - computed: false, optional: true, required: false
  private _acls = new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonModule {
  /**
  * Extra information to module to make configuration easier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#environment Deployment#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Type of modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#module_type Deployment#module_type}
  */
  readonly moduleType?: string;
  /**
  * Send messages between modules or send messages from modules to iot hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#routes Deployment#routes}
  */
  readonly routes?: { [key: string]: string };
  /**
  * Base64 encoded module twin details, desired properties of the module will be updated to reflect these values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#twin_detail Deployment#twin_detail}
  */
  readonly twinDetail?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonModuleToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    module_type: cdktf.stringToTerraform(struct!.moduleType),
    routes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routes),
    twin_detail: cdktf.stringToTerraform(struct!.twinDetail),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonModuleToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    module_type: {
      value: cdktf.stringToHclTerraform(struct!.moduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    twin_detail: {
      value: cdktf.stringToHclTerraform(struct!.twinDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._moduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleType = this._moduleType;
    }
    if (this._routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes;
    }
    if (this._twinDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.twinDetail = this._twinDetail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._moduleType = undefined;
      this._routes = undefined;
      this._twinDetail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._moduleType = value.moduleType;
      this._routes = value.routes;
      this._twinDetail = value.twinDetail;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // module_type - computed: false, optional: true, required: false
  private _moduleType?: string; 
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }
  public set moduleType(value: string) {
    this._moduleType = value;
  }
  public resetModuleType() {
    this._moduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTypeInput() {
    return this._moduleType;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: { [key: string]: string }; 
  public get routes() {
    return this.getStringMapAttribute('routes');
  }
  public set routes(value: { [key: string]: string }) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // twin_detail - computed: false, optional: true, required: false
  private _twinDetail?: string; 
  public get twinDetail() {
    return this.getStringAttribute('twin_detail');
  }
  public set twinDetail(value: string) {
    this._twinDetail = value;
  }
  public resetTwinDetail() {
    this._twinDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twinDetailInput() {
    return this._twinDetail;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonModuleList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonModule[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonModuleOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner {
  /**
  * UI map: AppEditPage:IdentityPane:Category_Field, AppDetailsPage:IdentityPane:Category_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#company Deployment#company}
  */
  readonly company?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Email_Field, AppDetailsPage:DeveloperPane:Email_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#email Deployment#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#group Deployment#group}
  */
  readonly group?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Name_Field, AppDetailsPage:DeveloperPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#user Deployment#user}
  */
  readonly user?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Website_Field, AppDetailsPage:DeveloperPane:Website_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#website Deployment#website}
  */
  readonly website?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonOwnerToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    group: cdktf.stringToTerraform(struct!.group),
    user: cdktf.stringToTerraform(struct!.user),
    website: cdktf.stringToTerraform(struct!.website),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonOwnerToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company: {
      value: cdktf.stringToHclTerraform(struct!.company),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website: {
      value: cdktf.stringToHclTerraform(struct!.website),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._website !== undefined) {
      hasAnyValues = true;
      internalValueResult.website = this._website;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._company = undefined;
      this._email = undefined;
      this._group = undefined;
      this._user = undefined;
      this._website = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._company = value.company;
      this._email = value.email;
      this._group = value.group;
      this._user = value.user;
      this._website = value.website;
    }
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonOwnerList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonOwnerOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions {
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJsonResources {
  /**
  * Name of the Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Value of Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonResourcesToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonResourcesToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJsonResources | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJsonResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonResourcesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJsonResources[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonResourcesOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigManifestJson {
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ac_kind Deployment#ac_kind}
  */
  readonly acKind: string;
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ac_version Deployment#ac_version}
  */
  readonly acVersion: string;
  /**
  * App (bundle) type. The correct values are: "APP_TYPE_UNSPECIFIED","APP_TYPE_VM","APP_TYPE_VM_RUNTIME","APP_TYPE_CONTAINER","APP_TYPE_MODULE", "APP_TYPE_DOCKER_COMPOSE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#app_type Deployment#app_type}
  */
  readonly appType?: string;
  /**
  * Enable CpuPinning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#cpu_pinning_enabled Deployment#cpu_pinning_enabled}
  */
  readonly cpuPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Deployment type for the app. The correct values are: "DEPLOYMENT_TYPE_UNSPECIFIED","DEPLOYMENT_TYPE_STAND_ALONE","DEPLOYMENT_TYPE_AZURE","DEPLOYMENT_TYPE_K3S","DEPLOYMENT_TYPE_AWS","DEPLOYMENT_TYPE_K3S_AZURE","DEPLOYMENT_TYPE_K3S_AWS","DEPLOYMENT_TYPE_VMWARE_VCE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#deployment_type Deployment#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * UI map: AppDetailsPage:IdentityPane:DescriptionField, AppMarketplacePage:AppCard:DescriptionField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#description Deployment#description}
  */
  readonly description?: string;
  /**
  * UI map: AppEditPage:IdentityPane:DISABLEVTPM_Field, AppDetailsPage:IdentityPane:DISABLEVTPM_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#disable_v_t_p_m Deployment#disable_v_t_p_m}
  */
  readonly disableVTPM?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Title_Field, AppDetailsPage:IdentityPane:Title_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#display_name Deployment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docker compose tar image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#docker_compose_tar_image_name Deployment#docker_compose_tar_image_name}
  */
  readonly dockerComposeTarImageName?: string;
  /**
  * Docker compose base64 encoded plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#docker_compose_yaml_text Deployment#docker_compose_yaml_text}
  */
  readonly dockerComposeYamlText?: string;
  /**
  * UI map: AppEditPage:IdentityPane:ENABLEVMCONFIG_Field, AppDetailsPage:IdentityPane:ENABLEVMCONFIG_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#enable_oem_win_license_key Deployment#enable_oem_win_license_key}
  */
  readonly enableOemWinLicenseKey?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:VNC_Field, AppDetailsPage:IdentityPane:VNC_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#enablevnc Deployment#enablevnc}
  */
  readonly enablevnc?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Name_Field, AppDetailsPage:IdentityPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * Size of persistent blank storage for runtime in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#persistent_runtime_size_bytes Deployment#persistent_runtime_size_bytes}
  */
  readonly persistentRuntimeSizeBytes?: string;
  /**
  * Indicates the internal communication protocol to pass configuration between Zedcloud and docker-compose runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#runtime_protocol_version Deployment#runtime_protocol_version}
  */
  readonly runtimeProtocolVersion?: string;
  /**
  * Indicates the version of container orchestration software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#runtime_version Deployment#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * UI map: AppEditPage:IdentityPane:VM_Mode_Field, AppDetailsPage:IdentityPane:VM_Mode_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#vmmode Deployment#vmmode}
  */
  readonly vmmode?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#configuration Deployment#configuration}
  */
  readonly configuration?: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration[] | cdktf.IResolvable;
  /**
  * container_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#container_detail Deployment#container_detail}
  */
  readonly containerDetail?: DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail[] | cdktf.IResolvable;
  /**
  * desc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#desc Deployment#desc}
  */
  readonly desc?: DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#images Deployment#images}
  */
  readonly images?: DeploymentAppInstPoliciesAppInstConfigManifestJsonImages[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#interfaces Deployment#interfaces}
  */
  readonly interfaces?: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces[] | cdktf.IResolvable;
  /**
  * module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#module Deployment#module}
  */
  readonly module?: DeploymentAppInstPoliciesAppInstConfigManifestJsonModule[] | cdktf.IResolvable;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#owner Deployment#owner}
  */
  readonly owner?: DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#permissions Deployment#permissions}
  */
  readonly permissions?: DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#resources Deployment#resources}
  */
  readonly resources?: DeploymentAppInstPoliciesAppInstConfigManifestJsonResources[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigManifestJsonToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_kind: cdktf.stringToTerraform(struct!.acKind),
    ac_version: cdktf.stringToTerraform(struct!.acVersion),
    app_type: cdktf.stringToTerraform(struct!.appType),
    cpu_pinning_enabled: cdktf.booleanToTerraform(struct!.cpuPinningEnabled),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    description: cdktf.stringToTerraform(struct!.description),
    disable_v_t_p_m: cdktf.booleanToTerraform(struct!.disableVTPM),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    docker_compose_tar_image_name: cdktf.stringToTerraform(struct!.dockerComposeTarImageName),
    docker_compose_yaml_text: cdktf.stringToTerraform(struct!.dockerComposeYamlText),
    enable_oem_win_license_key: cdktf.booleanToTerraform(struct!.enableOemWinLicenseKey),
    enablevnc: cdktf.booleanToTerraform(struct!.enablevnc),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_runtime_size_bytes: cdktf.stringToTerraform(struct!.persistentRuntimeSizeBytes),
    runtime_protocol_version: cdktf.stringToTerraform(struct!.runtimeProtocolVersion),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    vmmode: cdktf.stringToTerraform(struct!.vmmode),
    configuration: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationToTerraform, true)(struct!.configuration),
    container_detail: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailToTerraform, true)(struct!.containerDetail),
    desc: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonDescToTerraform, true)(struct!.desc),
    images: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonImagesToTerraform, true)(struct!.images),
    interfaces: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesToTerraform, true)(struct!.interfaces),
    module: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonModuleToTerraform, true)(struct!.module),
    owner: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonOwnerToTerraform, true)(struct!.owner),
    permissions: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsToTerraform, true)(struct!.permissions),
    resources: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonResourcesToTerraform, true)(struct!.resources),
  }
}


export function deploymentAppInstPoliciesAppInstConfigManifestJsonToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigManifestJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_kind: {
      value: cdktf.stringToHclTerraform(struct!.acKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_version: {
      value: cdktf.stringToHclTerraform(struct!.acVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_pinning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuPinningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_v_t_p_m: {
      value: cdktf.booleanToHclTerraform(struct!.disableVTPM),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_tar_image_name: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeTarImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_yaml_text: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeYamlText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_oem_win_license_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableOemWinLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablevnc: {
      value: cdktf.booleanToHclTerraform(struct!.enablevnc),
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
    persistent_runtime_size_bytes: {
      value: cdktf.stringToHclTerraform(struct!.persistentRuntimeSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmmode: {
      value: cdktf.stringToHclTerraform(struct!.vmmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationList",
    },
    container_detail: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailToHclTerraform, true)(struct!.containerDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailList",
    },
    desc: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonDescToHclTerraform, true)(struct!.desc),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonDescList",
    },
    images: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonImagesToHclTerraform, true)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesList",
    },
    interfaces: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesList",
    },
    module: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonModuleToHclTerraform, true)(struct!.module),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonModuleList",
    },
    owner: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonOwnerList",
    },
    permissions: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsToHclTerraform, true)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsList",
    },
    resources: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigManifestJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.acKind = this._acKind;
    }
    if (this._acVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.acVersion = this._acVersion;
    }
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._cpuPinningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPinningEnabled = this._cpuPinningEnabled;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableVTPM !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVTPM = this._disableVTPM;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._dockerComposeTarImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeTarImageName = this._dockerComposeTarImageName;
    }
    if (this._dockerComposeYamlText !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeYamlText = this._dockerComposeYamlText;
    }
    if (this._enableOemWinLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOemWinLicenseKey = this._enableOemWinLicenseKey;
    }
    if (this._enablevnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablevnc = this._enablevnc;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentRuntimeSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentRuntimeSizeBytes = this._persistentRuntimeSizeBytes;
    }
    if (this._runtimeProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProtocolVersion = this._runtimeProtocolVersion;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._vmmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmmode = this._vmmode;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._containerDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDetail = this._containerDetail?.internalValue;
    }
    if (this._desc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc?.internalValue;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._module?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigManifestJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acKind = undefined;
      this._acVersion = undefined;
      this._appType = undefined;
      this._cpuPinningEnabled = undefined;
      this._deploymentType = undefined;
      this._description = undefined;
      this._disableVTPM = undefined;
      this._displayName = undefined;
      this._dockerComposeTarImageName = undefined;
      this._dockerComposeYamlText = undefined;
      this._enableOemWinLicenseKey = undefined;
      this._enablevnc = undefined;
      this._name = undefined;
      this._persistentRuntimeSizeBytes = undefined;
      this._runtimeProtocolVersion = undefined;
      this._runtimeVersion = undefined;
      this._vmmode = undefined;
      this._configuration.internalValue = undefined;
      this._containerDetail.internalValue = undefined;
      this._desc.internalValue = undefined;
      this._images.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._module.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._permissions.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acKind = value.acKind;
      this._acVersion = value.acVersion;
      this._appType = value.appType;
      this._cpuPinningEnabled = value.cpuPinningEnabled;
      this._deploymentType = value.deploymentType;
      this._description = value.description;
      this._disableVTPM = value.disableVTPM;
      this._displayName = value.displayName;
      this._dockerComposeTarImageName = value.dockerComposeTarImageName;
      this._dockerComposeYamlText = value.dockerComposeYamlText;
      this._enableOemWinLicenseKey = value.enableOemWinLicenseKey;
      this._enablevnc = value.enablevnc;
      this._name = value.name;
      this._persistentRuntimeSizeBytes = value.persistentRuntimeSizeBytes;
      this._runtimeProtocolVersion = value.runtimeProtocolVersion;
      this._runtimeVersion = value.runtimeVersion;
      this._vmmode = value.vmmode;
      this._configuration.internalValue = value.configuration;
      this._containerDetail.internalValue = value.containerDetail;
      this._desc.internalValue = value.desc;
      this._images.internalValue = value.images;
      this._interfaces.internalValue = value.interfaces;
      this._module.internalValue = value.module;
      this._owner.internalValue = value.owner;
      this._permissions.internalValue = value.permissions;
      this._resources.internalValue = value.resources;
    }
  }

  // ac_kind - computed: false, optional: false, required: true
  private _acKind?: string; 
  public get acKind() {
    return this.getStringAttribute('ac_kind');
  }
  public set acKind(value: string) {
    this._acKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acKindInput() {
    return this._acKind;
  }

  // ac_version - computed: false, optional: false, required: true
  private _acVersion?: string; 
  public get acVersion() {
    return this.getStringAttribute('ac_version');
  }
  public set acVersion(value: string) {
    this._acVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acVersionInput() {
    return this._acVersion;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // cpu_pinning_enabled - computed: false, optional: true, required: false
  private _cpuPinningEnabled?: boolean | cdktf.IResolvable; 
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }
  public set cpuPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuPinningEnabled = value;
  }
  public resetCpuPinningEnabled() {
    this._cpuPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPinningEnabledInput() {
    return this._cpuPinningEnabled;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // disable_v_t_p_m - computed: false, optional: true, required: false
  private _disableVTPM?: boolean | cdktf.IResolvable; 
  public get disableVTPM() {
    return this.getBooleanAttribute('disable_v_t_p_m');
  }
  public set disableVTPM(value: boolean | cdktf.IResolvable) {
    this._disableVTPM = value;
  }
  public resetDisableVTPM() {
    this._disableVTPM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVTPMInput() {
    return this._disableVTPM;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // docker_compose_tar_image_name - computed: false, optional: true, required: false
  private _dockerComposeTarImageName?: string; 
  public get dockerComposeTarImageName() {
    return this.getStringAttribute('docker_compose_tar_image_name');
  }
  public set dockerComposeTarImageName(value: string) {
    this._dockerComposeTarImageName = value;
  }
  public resetDockerComposeTarImageName() {
    this._dockerComposeTarImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeTarImageNameInput() {
    return this._dockerComposeTarImageName;
  }

  // docker_compose_yaml_text - computed: false, optional: true, required: false
  private _dockerComposeYamlText?: string; 
  public get dockerComposeYamlText() {
    return this.getStringAttribute('docker_compose_yaml_text');
  }
  public set dockerComposeYamlText(value: string) {
    this._dockerComposeYamlText = value;
  }
  public resetDockerComposeYamlText() {
    this._dockerComposeYamlText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeYamlTextInput() {
    return this._dockerComposeYamlText;
  }

  // enable_oem_win_license_key - computed: false, optional: true, required: false
  private _enableOemWinLicenseKey?: boolean | cdktf.IResolvable; 
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }
  public set enableOemWinLicenseKey(value: boolean | cdktf.IResolvable) {
    this._enableOemWinLicenseKey = value;
  }
  public resetEnableOemWinLicenseKey() {
    this._enableOemWinLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOemWinLicenseKeyInput() {
    return this._enableOemWinLicenseKey;
  }

  // enablevnc - computed: false, optional: true, required: false
  private _enablevnc?: boolean | cdktf.IResolvable; 
  public get enablevnc() {
    return this.getBooleanAttribute('enablevnc');
  }
  public set enablevnc(value: boolean | cdktf.IResolvable) {
    this._enablevnc = value;
  }
  public resetEnablevnc() {
    this._enablevnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablevncInput() {
    return this._enablevnc;
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

  // persistent_runtime_size_bytes - computed: false, optional: true, required: false
  private _persistentRuntimeSizeBytes?: string; 
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }
  public set persistentRuntimeSizeBytes(value: string) {
    this._persistentRuntimeSizeBytes = value;
  }
  public resetPersistentRuntimeSizeBytes() {
    this._persistentRuntimeSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentRuntimeSizeBytesInput() {
    return this._persistentRuntimeSizeBytes;
  }

  // runtime_protocol_version - computed: false, optional: true, required: false
  private _runtimeProtocolVersion?: string; 
  public get runtimeProtocolVersion() {
    return this.getStringAttribute('runtime_protocol_version');
  }
  public set runtimeProtocolVersion(value: string) {
    this._runtimeProtocolVersion = value;
  }
  public resetRuntimeProtocolVersion() {
    this._runtimeProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeProtocolVersionInput() {
    return this._runtimeProtocolVersion;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // vmmode - computed: false, optional: true, required: false
  private _vmmode?: string; 
  public get vmmode() {
    return this.getStringAttribute('vmmode');
  }
  public set vmmode(value: string) {
    this._vmmode = value;
  }
  public resetVmmode() {
    this._vmmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmodeInput() {
    return this._vmmode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DeploymentAppInstPoliciesAppInstConfigManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // container_detail - computed: false, optional: true, required: false
  private _containerDetail = new DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetailList(this, "container_detail", false);
  public get containerDetail() {
    return this._containerDetail;
  }
  public putContainerDetail(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonContainerDetail[] | cdktf.IResolvable) {
    this._containerDetail.internalValue = value;
  }
  public resetContainerDetail() {
    this._containerDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDetailInput() {
    return this._containerDetail.internalValue;
  }

  // desc - computed: false, optional: true, required: false
  private _desc = new DeploymentAppInstPoliciesAppInstConfigManifestJsonDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }
  public putDesc(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonDesc[] | cdktf.IResolvable) {
    this._desc.internalValue = value;
  }
  public resetDesc() {
    this._desc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new DeploymentAppInstPoliciesAppInstConfigManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // module - computed: false, optional: true, required: false
  private _module = new DeploymentAppInstPoliciesAppInstConfigManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }
  public putModule(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonModule[] | cdktf.IResolvable) {
    this._module.internalValue = value;
  }
  public resetModule() {
    this._module.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new DeploymentAppInstPoliciesAppInstConfigManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DeploymentAppInstPoliciesAppInstConfigManifestJsonResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DeploymentAppInstPoliciesAppInstConfigManifestJsonResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigManifestJsonList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigManifestJson[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigManifestJsonOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigParentDetail {
  /**
  * Relation with child and parent object exists or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#reference_exists Deployment#reference_exists}
  */
  readonly referenceExists?: boolean | cdktf.IResolvable;
  /**
  * Update required flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#update_available Deployment#update_available}
  */
  readonly updateAvailable?: boolean | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigParentDetailToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_exists: cdktf.booleanToTerraform(struct!.referenceExists),
    update_available: cdktf.booleanToTerraform(struct!.updateAvailable),
  }
}


export function deploymentAppInstPoliciesAppInstConfigParentDetailToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_exists: {
      value: cdktf.booleanToHclTerraform(struct!.referenceExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_available: {
      value: cdktf.booleanToHclTerraform(struct!.updateAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigParentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigParentDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceExists = this._referenceExists;
    }
    if (this._updateAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAvailable = this._updateAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigParentDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceExists = undefined;
      this._updateAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceExists = value.referenceExists;
      this._updateAvailable = value.updateAvailable;
    }
  }

  // id_of_parent_object - computed: true, optional: false, required: false
  public get idOfParentObject() {
    return this.getStringAttribute('id_of_parent_object');
  }

  // reference_exists - computed: false, optional: true, required: false
  private _referenceExists?: boolean | cdktf.IResolvable; 
  public get referenceExists() {
    return this.getBooleanAttribute('reference_exists');
  }
  public set referenceExists(value: boolean | cdktf.IResolvable) {
    this._referenceExists = value;
  }
  public resetReferenceExists() {
    this._referenceExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceExistsInput() {
    return this._referenceExists;
  }

  // update_available - computed: false, optional: true, required: false
  private _updateAvailable?: boolean | cdktf.IResolvable; 
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }
  public set updateAvailable(value: boolean | cdktf.IResolvable) {
    this._updateAvailable = value;
  }
  public resetUpdateAvailable() {
    this._updateAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAvailableInput() {
    return this._updateAvailable;
  }

  // version_of_parent_object - computed: true, optional: false, required: false
  public get versionOfParentObject() {
    return this.getNumberAttribute('version_of_parent_object');
  }
}

export class DeploymentAppInstPoliciesAppInstConfigParentDetailList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigParentDetail[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigParentDetailOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfigVminfo {
  /**
  * Enable CpuPinning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#cpu_pinning_enabled Deployment#cpu_pinning_enabled}
  */
  readonly cpuPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * CPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#cpus Deployment#cpus}
  */
  readonly cpus: number;
  /**
  * Disable vTPM for virtual machines (VM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#disable_v_t_p_m Deployment#disable_v_t_p_m}
  */
  readonly disableVTPM?: boolean | cdktf.IResolvable;
  /**
  * Enable device which has VM to receive the Windows license embedded in the ACPI tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#enable_oem_win_license_key Deployment#enable_oem_win_license_key}
  */
  readonly enableOemWinLicenseKey?: boolean | cdktf.IResolvable;
  /**
  * Hardware Virtualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * VNC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#vnc Deployment#vnc}
  */
  readonly vnc: boolean | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigVminfoToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigVminfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_pinning_enabled: cdktf.booleanToTerraform(struct!.cpuPinningEnabled),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    disable_v_t_p_m: cdktf.booleanToTerraform(struct!.disableVTPM),
    enable_oem_win_license_key: cdktf.booleanToTerraform(struct!.enableOemWinLicenseKey),
    mode: cdktf.stringToTerraform(struct!.mode),
    vnc: cdktf.booleanToTerraform(struct!.vnc),
  }
}


export function deploymentAppInstPoliciesAppInstConfigVminfoToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfigVminfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_pinning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuPinningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_v_t_p_m: {
      value: cdktf.booleanToHclTerraform(struct!.disableVTPM),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_oem_win_license_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableOemWinLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnc: {
      value: cdktf.booleanToHclTerraform(struct!.vnc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigVminfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfigVminfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPinningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPinningEnabled = this._cpuPinningEnabled;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._disableVTPM !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVTPM = this._disableVTPM;
    }
    if (this._enableOemWinLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOemWinLicenseKey = this._enableOemWinLicenseKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnc = this._vnc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfigVminfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuPinningEnabled = undefined;
      this._cpus = undefined;
      this._disableVTPM = undefined;
      this._enableOemWinLicenseKey = undefined;
      this._mode = undefined;
      this._vnc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuPinningEnabled = value.cpuPinningEnabled;
      this._cpus = value.cpus;
      this._disableVTPM = value.disableVTPM;
      this._enableOemWinLicenseKey = value.enableOemWinLicenseKey;
      this._mode = value.mode;
      this._vnc = value.vnc;
    }
  }

  // cpu_pinning_enabled - computed: false, optional: true, required: false
  private _cpuPinningEnabled?: boolean | cdktf.IResolvable; 
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }
  public set cpuPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuPinningEnabled = value;
  }
  public resetCpuPinningEnabled() {
    this._cpuPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPinningEnabledInput() {
    return this._cpuPinningEnabled;
  }

  // cpus - computed: false, optional: false, required: true
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // disable_v_t_p_m - computed: false, optional: true, required: false
  private _disableVTPM?: boolean | cdktf.IResolvable; 
  public get disableVTPM() {
    return this.getBooleanAttribute('disable_v_t_p_m');
  }
  public set disableVTPM(value: boolean | cdktf.IResolvable) {
    this._disableVTPM = value;
  }
  public resetDisableVTPM() {
    this._disableVTPM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVTPMInput() {
    return this._disableVTPM;
  }

  // enable_oem_win_license_key - computed: false, optional: true, required: false
  private _enableOemWinLicenseKey?: boolean | cdktf.IResolvable; 
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }
  public set enableOemWinLicenseKey(value: boolean | cdktf.IResolvable) {
    this._enableOemWinLicenseKey = value;
  }
  public resetEnableOemWinLicenseKey() {
    this._enableOemWinLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOemWinLicenseKeyInput() {
    return this._enableOemWinLicenseKey;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // vnc - computed: false, optional: false, required: true
  private _vnc?: boolean | cdktf.IResolvable; 
  public get vnc() {
    return this.getBooleanAttribute('vnc');
  }
  public set vnc(value: boolean | cdktf.IResolvable) {
    this._vnc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vncInput() {
    return this._vnc;
  }

  // vnc_display - computed: true, optional: false, required: false
  public get vncDisplay() {
    return this.getNumberAttribute('vnc_display');
  }
}

export class DeploymentAppInstPoliciesAppInstConfigVminfoList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfigVminfo[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigVminfoOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigVminfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesAppInstConfig {
  /**
  * User defined name of the edge app, unique across the enterprise. Once app name is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#bundle_id Deployment#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * current bundle version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#bundle_version Deployment#bundle_version}
  */
  readonly bundleVersion?: number;
  /**
  * user defined cpus for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#cpus Deployment#cpus}
  */
  readonly cpus?: number;
  /**
  * user defined memory for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#memory Deployment#memory}
  */
  readonly memory?: number;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name_app_part Deployment#name_app_part}
  */
  readonly nameAppPart?: string;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name_project_part Deployment#name_project_part}
  */
  readonly nameProjectPart?: string;
  /**
  * app naming scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#naming_scheme Deployment#naming_scheme}
  */
  readonly namingScheme?: string;
  /**
  * user defined network options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#networks Deployment#networks}
  */
  readonly networks?: number;
  /**
  * this flag denotes whether there is latest bundle available in the marketplace or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#new_bundle_version_available Deployment#new_bundle_version_available}
  */
  readonly newBundleVersionAvailable?: boolean | cdktf.IResolvable;
  /**
  * origin of object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#origin_type Deployment#origin_type}
  */
  readonly originType?: string;
  /**
  * Remote console flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#remote_console Deployment#remote_console}
  */
  readonly remoteConsole?: boolean | cdktf.IResolvable;
  /**
  * start delay is the time in seconds EVE should wait after boot before starting the application instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#start_delay_in_seconds Deployment#start_delay_in_seconds}
  */
  readonly startDelayInSeconds?: number;
  /**
  * user defined storage for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#storage Deployment#storage}
  */
  readonly storage?: number;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#interfaces Deployment#interfaces}
  */
  readonly interfaces?: DeploymentAppInstPoliciesAppInstConfigInterfaces[] | cdktf.IResolvable;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#logs Deployment#logs}
  */
  readonly logs?: DeploymentAppInstPoliciesAppInstConfigLogs[] | cdktf.IResolvable;
  /**
  * manifest_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#manifest_json Deployment#manifest_json}
  */
  readonly manifestJson?: DeploymentAppInstPoliciesAppInstConfigManifestJson[] | cdktf.IResolvable;
  /**
  * parent_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#parent_detail Deployment#parent_detail}
  */
  readonly parentDetail?: DeploymentAppInstPoliciesAppInstConfigParentDetail[] | cdktf.IResolvable;
  /**
  * vminfo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#vminfo Deployment#vminfo}
  */
  readonly vminfo?: DeploymentAppInstPoliciesAppInstConfigVminfo[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesAppInstConfigToTerraform(struct?: DeploymentAppInstPoliciesAppInstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_id: cdktf.stringToTerraform(struct!.bundleId),
    bundle_version: cdktf.numberToTerraform(struct!.bundleVersion),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    memory: cdktf.numberToTerraform(struct!.memory),
    name_app_part: cdktf.stringToTerraform(struct!.nameAppPart),
    name_project_part: cdktf.stringToTerraform(struct!.nameProjectPart),
    naming_scheme: cdktf.stringToTerraform(struct!.namingScheme),
    networks: cdktf.numberToTerraform(struct!.networks),
    new_bundle_version_available: cdktf.booleanToTerraform(struct!.newBundleVersionAvailable),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    remote_console: cdktf.booleanToTerraform(struct!.remoteConsole),
    start_delay_in_seconds: cdktf.numberToTerraform(struct!.startDelayInSeconds),
    storage: cdktf.numberToTerraform(struct!.storage),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    interfaces: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigInterfacesToTerraform, true)(struct!.interfaces),
    logs: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigLogsToTerraform, true)(struct!.logs),
    manifest_json: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigManifestJsonToTerraform, true)(struct!.manifestJson),
    parent_detail: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigParentDetailToTerraform, true)(struct!.parentDetail),
    vminfo: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigVminfoToTerraform, true)(struct!.vminfo),
  }
}


export function deploymentAppInstPoliciesAppInstConfigToHclTerraform(struct?: DeploymentAppInstPoliciesAppInstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.bundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktf.numberToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_app_part: {
      value: cdktf.stringToHclTerraform(struct!.nameAppPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_project_part: {
      value: cdktf.stringToHclTerraform(struct!.nameProjectPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    naming_scheme: {
      value: cdktf.stringToHclTerraform(struct!.namingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networks: {
      value: cdktf.numberToHclTerraform(struct!.networks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_bundle_version_available: {
      value: cdktf.booleanToHclTerraform(struct!.newBundleVersionAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_console: {
      value: cdktf.booleanToHclTerraform(struct!.remoteConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.startDelayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.numberToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    interfaces: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigInterfacesList",
    },
    logs: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigLogsToHclTerraform, true)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigLogsList",
    },
    manifest_json: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigManifestJsonToHclTerraform, true)(struct!.manifestJson),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigManifestJsonList",
    },
    parent_detail: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigParentDetailToHclTerraform, true)(struct!.parentDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigParentDetailList",
    },
    vminfo: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigVminfoToHclTerraform, true)(struct!.vminfo),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigVminfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesAppInstConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesAppInstConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleId = this._bundleId;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._nameAppPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAppPart = this._nameAppPart;
    }
    if (this._nameProjectPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameProjectPart = this._nameProjectPart;
    }
    if (this._namingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingScheme = this._namingScheme;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._newBundleVersionAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.newBundleVersionAvailable = this._newBundleVersionAvailable;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._remoteConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteConsole = this._remoteConsole;
    }
    if (this._startDelayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDelayInSeconds = this._startDelayInSeconds;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._manifestJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestJson = this._manifestJson?.internalValue;
    }
    if (this._parentDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentDetail = this._parentDetail?.internalValue;
    }
    if (this._vminfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vminfo = this._vminfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesAppInstConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleId = undefined;
      this._bundleVersion = undefined;
      this._cpus = undefined;
      this._memory = undefined;
      this._nameAppPart = undefined;
      this._nameProjectPart = undefined;
      this._namingScheme = undefined;
      this._networks = undefined;
      this._newBundleVersionAvailable = undefined;
      this._originType = undefined;
      this._remoteConsole = undefined;
      this._startDelayInSeconds = undefined;
      this._storage = undefined;
      this._tags = undefined;
      this._interfaces.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._manifestJson.internalValue = undefined;
      this._parentDetail.internalValue = undefined;
      this._vminfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleId = value.bundleId;
      this._bundleVersion = value.bundleVersion;
      this._cpus = value.cpus;
      this._memory = value.memory;
      this._nameAppPart = value.nameAppPart;
      this._nameProjectPart = value.nameProjectPart;
      this._namingScheme = value.namingScheme;
      this._networks = value.networks;
      this._newBundleVersionAvailable = value.newBundleVersionAvailable;
      this._originType = value.originType;
      this._remoteConsole = value.remoteConsole;
      this._startDelayInSeconds = value.startDelayInSeconds;
      this._storage = value.storage;
      this._tags = value.tags;
      this._interfaces.internalValue = value.interfaces;
      this._logs.internalValue = value.logs;
      this._manifestJson.internalValue = value.manifestJson;
      this._parentDetail.internalValue = value.parentDetail;
      this._vminfo.internalValue = value.vminfo;
    }
  }

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // bundle_version - computed: false, optional: true, required: false
  private _bundleVersion?: number; 
  public get bundleVersion() {
    return this.getNumberAttribute('bundle_version');
  }
  public set bundleVersion(value: number) {
    this._bundleVersion = value;
  }
  public resetBundleVersion() {
    this._bundleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // drives - computed: true, optional: false, required: false
  public get drives() {
    return this.getNumberAttribute('drives');
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // name_app_part - computed: false, optional: true, required: false
  private _nameAppPart?: string; 
  public get nameAppPart() {
    return this.getStringAttribute('name_app_part');
  }
  public set nameAppPart(value: string) {
    this._nameAppPart = value;
  }
  public resetNameAppPart() {
    this._nameAppPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAppPartInput() {
    return this._nameAppPart;
  }

  // name_project_part - computed: false, optional: true, required: false
  private _nameProjectPart?: string; 
  public get nameProjectPart() {
    return this.getStringAttribute('name_project_part');
  }
  public set nameProjectPart(value: string) {
    this._nameProjectPart = value;
  }
  public resetNameProjectPart() {
    this._nameProjectPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameProjectPartInput() {
    return this._nameProjectPart;
  }

  // naming_scheme - computed: false, optional: true, required: false
  private _namingScheme?: string; 
  public get namingScheme() {
    return this.getStringAttribute('naming_scheme');
  }
  public set namingScheme(value: string) {
    this._namingScheme = value;
  }
  public resetNamingScheme() {
    this._namingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namingSchemeInput() {
    return this._namingScheme;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: number; 
  public get networks() {
    return this.getNumberAttribute('networks');
  }
  public set networks(value: number) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // new_bundle_version_available - computed: false, optional: true, required: false
  private _newBundleVersionAvailable?: boolean | cdktf.IResolvable; 
  public get newBundleVersionAvailable() {
    return this.getBooleanAttribute('new_bundle_version_available');
  }
  public set newBundleVersionAvailable(value: boolean | cdktf.IResolvable) {
    this._newBundleVersionAvailable = value;
  }
  public resetNewBundleVersionAvailable() {
    this._newBundleVersionAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newBundleVersionAvailableInput() {
    return this._newBundleVersionAvailable;
  }

  // origin_type - computed: false, optional: true, required: false
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  public resetOriginType() {
    this._originType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // remote_console - computed: false, optional: true, required: false
  private _remoteConsole?: boolean | cdktf.IResolvable; 
  public get remoteConsole() {
    return this.getBooleanAttribute('remote_console');
  }
  public set remoteConsole(value: boolean | cdktf.IResolvable) {
    this._remoteConsole = value;
  }
  public resetRemoteConsole() {
    this._remoteConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteConsoleInput() {
    return this._remoteConsole;
  }

  // start_delay_in_seconds - computed: false, optional: true, required: false
  private _startDelayInSeconds?: number; 
  public get startDelayInSeconds() {
    return this.getNumberAttribute('start_delay_in_seconds');
  }
  public set startDelayInSeconds(value: number) {
    this._startDelayInSeconds = value;
  }
  public resetStartDelayInSeconds() {
    this._startDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInSecondsInput() {
    return this._startDelayInSeconds;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DeploymentAppInstPoliciesAppInstConfigInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DeploymentAppInstPoliciesAppInstConfigInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new DeploymentAppInstPoliciesAppInstConfigLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DeploymentAppInstPoliciesAppInstConfigLogs[] | cdktf.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // manifest_json - computed: false, optional: true, required: false
  private _manifestJson = new DeploymentAppInstPoliciesAppInstConfigManifestJsonList(this, "manifest_json", false);
  public get manifestJson() {
    return this._manifestJson;
  }
  public putManifestJson(value: DeploymentAppInstPoliciesAppInstConfigManifestJson[] | cdktf.IResolvable) {
    this._manifestJson.internalValue = value;
  }
  public resetManifestJson() {
    this._manifestJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestJsonInput() {
    return this._manifestJson.internalValue;
  }

  // parent_detail - computed: false, optional: true, required: false
  private _parentDetail = new DeploymentAppInstPoliciesAppInstConfigParentDetailList(this, "parent_detail", false);
  public get parentDetail() {
    return this._parentDetail;
  }
  public putParentDetail(value: DeploymentAppInstPoliciesAppInstConfigParentDetail[] | cdktf.IResolvable) {
    this._parentDetail.internalValue = value;
  }
  public resetParentDetail() {
    this._parentDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDetailInput() {
    return this._parentDetail.internalValue;
  }

  // vminfo - computed: false, optional: true, required: false
  private _vminfo = new DeploymentAppInstPoliciesAppInstConfigVminfoList(this, "vminfo", false);
  public get vminfo() {
    return this._vminfo;
  }
  public putVminfo(value: DeploymentAppInstPoliciesAppInstConfigVminfo[] | cdktf.IResolvable) {
    this._vminfo.internalValue = value;
  }
  public resetVminfo() {
    this._vminfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vminfoInput() {
    return this._vminfo.internalValue;
  }
}

export class DeploymentAppInstPoliciesAppInstConfigList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesAppInstConfig[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesAppInstConfigOutputReference {
    return new DeploymentAppInstPoliciesAppInstConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesMetaDataRevision {
}

export function deploymentAppInstPoliciesMetaDataRevisionToTerraform(struct?: DeploymentAppInstPoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentAppInstPoliciesMetaDataRevisionToHclTerraform(struct?: DeploymentAppInstPoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentAppInstPoliciesMetaDataRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentAppInstPoliciesMetaDataRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesMetaDataRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentAppInstPoliciesMetaDataRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentAppInstPoliciesMetaDataRevisionOutputReference {
    return new DeploymentAppInstPoliciesMetaDataRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPoliciesMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy that will be used for targeting by devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#policy_target_condition Deployment#policy_target_condition}
  */
  readonly policyTargetCondition?: { [key: string]: string };
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
}

export function deploymentAppInstPoliciesMetaDataToTerraform(struct?: DeploymentAppInstPoliciesMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy_target_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.policyTargetCondition),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function deploymentAppInstPoliciesMetaDataToHclTerraform(struct?: DeploymentAppInstPoliciesMetaData | cdktf.IResolvable): any {
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
    policy_target_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.policyTargetCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPoliciesMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyTargetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTargetCondition = this._policyTargetCondition;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPoliciesMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._policyTargetCondition = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._policyTargetCondition = value.policyTargetCondition;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_target_condition - computed: false, optional: true, required: false
  private _policyTargetCondition?: { [key: string]: string }; 
  public get policyTargetCondition() {
    return this.getStringMapAttribute('policy_target_condition');
  }
  public set policyTargetCondition(value: { [key: string]: string }) {
    this._policyTargetCondition = value;
  }
  public resetPolicyTargetCondition() {
    this._policyTargetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTargetConditionInput() {
    return this._policyTargetCondition;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DeploymentAppInstPoliciesMetaDataRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class DeploymentAppInstPoliciesMetaDataList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPoliciesMetaData[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesMetaDataOutputReference {
    return new DeploymentAppInstPoliciesMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentAppInstPolicies {
  /**
  * app_inst_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#app_inst_config Deployment#app_inst_config}
  */
  readonly appInstConfig?: DeploymentAppInstPoliciesAppInstConfig[] | cdktf.IResolvable;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#meta_data Deployment#meta_data}
  */
  readonly metaData?: DeploymentAppInstPoliciesMetaData[] | cdktf.IResolvable;
}

export function deploymentAppInstPoliciesToTerraform(struct?: DeploymentAppInstPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_inst_config: cdktf.listMapper(deploymentAppInstPoliciesAppInstConfigToTerraform, true)(struct!.appInstConfig),
    meta_data: cdktf.listMapper(deploymentAppInstPoliciesMetaDataToTerraform, true)(struct!.metaData),
  }
}


export function deploymentAppInstPoliciesToHclTerraform(struct?: DeploymentAppInstPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_inst_config: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesAppInstConfigToHclTerraform, true)(struct!.appInstConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesAppInstConfigList",
    },
    meta_data: {
      value: cdktf.listMapperHcl(deploymentAppInstPoliciesMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentAppInstPoliciesMetaDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentAppInstPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentAppInstPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appInstConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInstConfig = this._appInstConfig?.internalValue;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentAppInstPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appInstConfig.internalValue = undefined;
      this._metaData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appInstConfig.internalValue = value.appInstConfig;
      this._metaData.internalValue = value.metaData;
    }
  }

  // app_inst_config - computed: false, optional: true, required: false
  private _appInstConfig = new DeploymentAppInstPoliciesAppInstConfigList(this, "app_inst_config", false);
  public get appInstConfig() {
    return this._appInstConfig;
  }
  public putAppInstConfig(value: DeploymentAppInstPoliciesAppInstConfig[] | cdktf.IResolvable) {
    this._appInstConfig.internalValue = value;
  }
  public resetAppInstConfig() {
    this._appInstConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstConfigInput() {
    return this._appInstConfig.internalValue;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new DeploymentAppInstPoliciesMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: DeploymentAppInstPoliciesMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }
}

export class DeploymentAppInstPoliciesList extends cdktf.ComplexList {
  public internalValue? : DeploymentAppInstPolicies[] | cdktf.IResolvable

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
  public get(index: number): DeploymentAppInstPoliciesOutputReference {
    return new DeploymentAppInstPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentClusterPolicyRevision {
}

export function deploymentClusterPolicyRevisionToTerraform(struct?: DeploymentClusterPolicyRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentClusterPolicyRevisionToHclTerraform(struct?: DeploymentClusterPolicyRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentClusterPolicyRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentClusterPolicyRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentClusterPolicyRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentClusterPolicyRevisionList extends cdktf.ComplexList {
  public internalValue? : DeploymentClusterPolicyRevision[] | cdktf.IResolvable

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
  public get(index: number): DeploymentClusterPolicyRevisionOutputReference {
    return new DeploymentClusterPolicyRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentClusterPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#id Deployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#revision Deployment#revision}
  */
  readonly revision?: DeploymentClusterPolicyRevision[] | cdktf.IResolvable;
}

export function deploymentClusterPolicyToTerraform(struct?: DeploymentClusterPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    revision: cdktf.listMapper(deploymentClusterPolicyRevisionToTerraform, true)(struct!.revision),
  }
}


export function deploymentClusterPolicyToHclTerraform(struct?: DeploymentClusterPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.listMapperHcl(deploymentClusterPolicyRevisionToHclTerraform, true)(struct!.revision),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentClusterPolicyRevisionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentClusterPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentClusterPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._revision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentClusterPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._title = undefined;
      this._revision.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._title = value.title;
      this._revision.internalValue = value.revision;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new DeploymentClusterPolicyRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: DeploymentClusterPolicyRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }
}

export class DeploymentClusterPolicyList extends cdktf.ComplexList {
  public internalValue? : DeploymentClusterPolicy[] | cdktf.IResolvable

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
  public get(index: number): DeploymentClusterPolicyOutputReference {
    return new DeploymentClusterPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentDevicePoliciesAttestationPolicy {
  /**
  * Attestation policy type. Type values: 
  * 	- DEVICE_ATTEST_POLICY_TYPE_ACCEPT: Do not enforce attestation. All devices are marked as successfully attested.
  * 	- DEVICE_ATTEST_POLICY_TYPE_ENFORCE: Enforce attestation. Devices failing attestation are marked accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type: string;
}

export function deploymentDevicePoliciesAttestationPolicyToTerraform(struct?: DeploymentDevicePoliciesAttestationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function deploymentDevicePoliciesAttestationPolicyToHclTerraform(struct?: DeploymentDevicePoliciesAttestationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentDevicePoliciesAttestationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentDevicePoliciesAttestationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentDevicePoliciesAttestationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DeploymentDevicePoliciesAttestationPolicyList extends cdktf.ComplexList {
  public internalValue? : DeploymentDevicePoliciesAttestationPolicy[] | cdktf.IResolvable

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
  public get(index: number): DeploymentDevicePoliciesAttestationPolicyOutputReference {
    return new DeploymentDevicePoliciesAttestationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentDevicePoliciesMetaDataRevision {
}

export function deploymentDevicePoliciesMetaDataRevisionToTerraform(struct?: DeploymentDevicePoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentDevicePoliciesMetaDataRevisionToHclTerraform(struct?: DeploymentDevicePoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentDevicePoliciesMetaDataRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentDevicePoliciesMetaDataRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentDevicePoliciesMetaDataRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentDevicePoliciesMetaDataRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentDevicePoliciesMetaDataRevisionOutputReference {
    return new DeploymentDevicePoliciesMetaDataRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentDevicePoliciesMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy that will be used for targeting by devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#policy_target_condition Deployment#policy_target_condition}
  */
  readonly policyTargetCondition?: { [key: string]: string };
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
}

export function deploymentDevicePoliciesMetaDataToTerraform(struct?: DeploymentDevicePoliciesMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy_target_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.policyTargetCondition),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function deploymentDevicePoliciesMetaDataToHclTerraform(struct?: DeploymentDevicePoliciesMetaData | cdktf.IResolvable): any {
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
    policy_target_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.policyTargetCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentDevicePoliciesMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentDevicePoliciesMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyTargetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTargetCondition = this._policyTargetCondition;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentDevicePoliciesMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._policyTargetCondition = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._policyTargetCondition = value.policyTargetCondition;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_target_condition - computed: false, optional: true, required: false
  private _policyTargetCondition?: { [key: string]: string }; 
  public get policyTargetCondition() {
    return this.getStringMapAttribute('policy_target_condition');
  }
  public set policyTargetCondition(value: { [key: string]: string }) {
    this._policyTargetCondition = value;
  }
  public resetPolicyTargetCondition() {
    this._policyTargetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTargetConditionInput() {
    return this._policyTargetCondition;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DeploymentDevicePoliciesMetaDataRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class DeploymentDevicePoliciesMetaDataList extends cdktf.ComplexList {
  public internalValue? : DeploymentDevicePoliciesMetaData[] | cdktf.IResolvable

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
  public get(index: number): DeploymentDevicePoliciesMetaDataOutputReference {
    return new DeploymentDevicePoliciesMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentDevicePolicies {
  /**
  * device policy type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#policy_sub_type Deployment#policy_sub_type}
  */
  readonly policySubType?: string;
  /**
  * attestation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#attestation_policy Deployment#attestation_policy}
  */
  readonly attestationPolicy?: DeploymentDevicePoliciesAttestationPolicy[] | cdktf.IResolvable;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#meta_data Deployment#meta_data}
  */
  readonly metaData?: DeploymentDevicePoliciesMetaData[] | cdktf.IResolvable;
}

export function deploymentDevicePoliciesToTerraform(struct?: DeploymentDevicePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_sub_type: cdktf.stringToTerraform(struct!.policySubType),
    attestation_policy: cdktf.listMapper(deploymentDevicePoliciesAttestationPolicyToTerraform, true)(struct!.attestationPolicy),
    meta_data: cdktf.listMapper(deploymentDevicePoliciesMetaDataToTerraform, true)(struct!.metaData),
  }
}


export function deploymentDevicePoliciesToHclTerraform(struct?: DeploymentDevicePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.policySubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attestation_policy: {
      value: cdktf.listMapperHcl(deploymentDevicePoliciesAttestationPolicyToHclTerraform, true)(struct!.attestationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentDevicePoliciesAttestationPolicyList",
    },
    meta_data: {
      value: cdktf.listMapperHcl(deploymentDevicePoliciesMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentDevicePoliciesMetaDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentDevicePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentDevicePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policySubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policySubType = this._policySubType;
    }
    if (this._attestationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationPolicy = this._attestationPolicy?.internalValue;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentDevicePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policySubType = undefined;
      this._attestationPolicy.internalValue = undefined;
      this._metaData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policySubType = value.policySubType;
      this._attestationPolicy.internalValue = value.attestationPolicy;
      this._metaData.internalValue = value.metaData;
    }
  }

  // policy_sub_type - computed: false, optional: true, required: false
  private _policySubType?: string; 
  public get policySubType() {
    return this.getStringAttribute('policy_sub_type');
  }
  public set policySubType(value: string) {
    this._policySubType = value;
  }
  public resetPolicySubType() {
    this._policySubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySubTypeInput() {
    return this._policySubType;
  }

  // attestation_policy - computed: false, optional: true, required: false
  private _attestationPolicy = new DeploymentDevicePoliciesAttestationPolicyList(this, "attestation_policy", false);
  public get attestationPolicy() {
    return this._attestationPolicy;
  }
  public putAttestationPolicy(value: DeploymentDevicePoliciesAttestationPolicy[] | cdktf.IResolvable) {
    this._attestationPolicy.internalValue = value;
  }
  public resetAttestationPolicy() {
    this._attestationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationPolicyInput() {
    return this._attestationPolicy.internalValue;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new DeploymentDevicePoliciesMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: DeploymentDevicePoliciesMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }
}

export class DeploymentDevicePoliciesList extends cdktf.ComplexList {
  public internalValue? : DeploymentDevicePolicies[] | cdktf.IResolvable

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
  public get(index: number): DeploymentDevicePoliciesOutputReference {
    return new DeploymentDevicePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allow_app Deployment#allow_app}
  */
  readonly allowApp?: boolean | cdktf.IResolvable;
}

export function deploymentEdgeviewPolicyEdgeviewcfgAppPolicyToTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_app: cdktf.booleanToTerraform(struct!.allowApp),
  }
}


export function deploymentEdgeviewPolicyEdgeviewcfgAppPolicyToHclTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_app: {
      value: cdktf.booleanToHclTerraform(struct!.allowApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowApp = this._allowApp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowApp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowApp = value.allowApp;
    }
  }

  // allow_app - computed: false, optional: true, required: false
  private _allowApp?: boolean | cdktf.IResolvable; 
  public get allowApp() {
    return this.getBooleanAttribute('allow_app');
  }
  public set allowApp(value: boolean | cdktf.IResolvable) {
    this._allowApp = value;
  }
  public resetAllowApp() {
    this._allowApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAppInput() {
    return this._allowApp;
  }
}

export class DeploymentEdgeviewPolicyEdgeviewcfgAppPolicyList extends cdktf.ComplexList {
  public internalValue? : DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference {
    return new DeploymentEdgeviewPolicyEdgeviewcfgAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allow_dev Deployment#allow_dev}
  */
  readonly allowDev?: boolean | cdktf.IResolvable;
}

export function deploymentEdgeviewPolicyEdgeviewcfgDevPolicyToTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dev: cdktf.booleanToTerraform(struct!.allowDev),
  }
}


export function deploymentEdgeviewPolicyEdgeviewcfgDevPolicyToHclTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dev: {
      value: cdktf.booleanToHclTerraform(struct!.allowDev),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDev !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDev = this._allowDev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDev = value.allowDev;
    }
  }

  // allow_dev - computed: false, optional: true, required: false
  private _allowDev?: boolean | cdktf.IResolvable; 
  public get allowDev() {
    return this.getBooleanAttribute('allow_dev');
  }
  public set allowDev(value: boolean | cdktf.IResolvable) {
    this._allowDev = value;
  }
  public resetAllowDev() {
    this._allowDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDevInput() {
    return this._allowDev;
  }
}

export class DeploymentEdgeviewPolicyEdgeviewcfgDevPolicyList extends cdktf.ComplexList {
  public internalValue? : DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference {
    return new DeploymentEdgeviewPolicyEdgeviewcfgDevPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allow_ext Deployment#allow_ext}
  */
  readonly allowExt?: boolean | cdktf.IResolvable;
}

export function deploymentEdgeviewPolicyEdgeviewcfgExtPolicyToTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ext: cdktf.booleanToTerraform(struct!.allowExt),
  }
}


export function deploymentEdgeviewPolicyEdgeviewcfgExtPolicyToHclTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ext: {
      value: cdktf.booleanToHclTerraform(struct!.allowExt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExt = this._allowExt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowExt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowExt = value.allowExt;
    }
  }

  // allow_ext - computed: false, optional: true, required: false
  private _allowExt?: boolean | cdktf.IResolvable; 
  public get allowExt() {
    return this.getBooleanAttribute('allow_ext');
  }
  public set allowExt(value: boolean | cdktf.IResolvable) {
    this._allowExt = value;
  }
  public resetAllowExt() {
    this._allowExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExtInput() {
    return this._allowExt;
  }
}

export class DeploymentEdgeviewPolicyEdgeviewcfgExtPolicyList extends cdktf.ComplexList {
  public internalValue? : DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference {
    return new DeploymentEdgeviewPolicyEdgeviewcfgExtPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allow_sec Deployment#allow_sec}
  */
  readonly allowSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#disp_url Deployment#disp_url}
  */
  readonly dispUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#encrypt Deployment#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#expire_sec Deployment#expire_sec}
  */
  readonly expireSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#num_inst Deployment#num_inst}
  */
  readonly numInst?: number;
}

export function deploymentEdgeviewPolicyEdgeviewcfgJwtInfoToTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sec: cdktf.numberToTerraform(struct!.allowSec),
    disp_url: cdktf.stringToTerraform(struct!.dispUrl),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    expire_sec: cdktf.stringToTerraform(struct!.expireSec),
    num_inst: cdktf.numberToTerraform(struct!.numInst),
  }
}


export function deploymentEdgeviewPolicyEdgeviewcfgJwtInfoToHclTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sec: {
      value: cdktf.numberToHclTerraform(struct!.allowSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disp_url: {
      value: cdktf.stringToHclTerraform(struct!.dispUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_sec: {
      value: cdktf.stringToHclTerraform(struct!.expireSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_inst: {
      value: cdktf.numberToHclTerraform(struct!.numInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSec = this._allowSec;
    }
    if (this._dispUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispUrl = this._dispUrl;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._expireSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireSec = this._expireSec;
    }
    if (this._numInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInst = this._numInst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSec = undefined;
      this._dispUrl = undefined;
      this._encrypt = undefined;
      this._expireSec = undefined;
      this._numInst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSec = value.allowSec;
      this._dispUrl = value.dispUrl;
      this._encrypt = value.encrypt;
      this._expireSec = value.expireSec;
      this._numInst = value.numInst;
    }
  }

  // allow_sec - computed: false, optional: true, required: false
  private _allowSec?: number; 
  public get allowSec() {
    return this.getNumberAttribute('allow_sec');
  }
  public set allowSec(value: number) {
    this._allowSec = value;
  }
  public resetAllowSec() {
    this._allowSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSecInput() {
    return this._allowSec;
  }

  // disp_url - computed: false, optional: true, required: false
  private _dispUrl?: string; 
  public get dispUrl() {
    return this.getStringAttribute('disp_url');
  }
  public set dispUrl(value: string) {
    this._dispUrl = value;
  }
  public resetDispUrl() {
    this._dispUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispUrlInput() {
    return this._dispUrl;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // expire_sec - computed: true, optional: true, required: false
  private _expireSec?: string; 
  public get expireSec() {
    return this.getStringAttribute('expire_sec');
  }
  public set expireSec(value: string) {
    this._expireSec = value;
  }
  public resetExpireSec() {
    this._expireSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireSecInput() {
    return this._expireSec;
  }

  // num_inst - computed: false, optional: true, required: false
  private _numInst?: number; 
  public get numInst() {
    return this.getNumberAttribute('num_inst');
  }
  public set numInst(value: number) {
    this._numInst = value;
  }
  public resetNumInst() {
    this._numInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstInput() {
    return this._numInst;
  }
}

export class DeploymentEdgeviewPolicyEdgeviewcfgJwtInfoList extends cdktf.ComplexList {
  public internalValue? : DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference {
    return new DeploymentEdgeviewPolicyEdgeviewcfgJwtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicyEdgeviewcfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#generation_id Deployment#generation_id}
  */
  readonly generationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#token Deployment#token}
  */
  readonly token?: string;
  /**
  * app_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#app_policy Deployment#app_policy}
  */
  readonly appPolicy?: DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy[] | cdktf.IResolvable;
  /**
  * dev_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#dev_policy Deployment#dev_policy}
  */
  readonly devPolicy?: DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy[] | cdktf.IResolvable;
  /**
  * ext_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ext_policy Deployment#ext_policy}
  */
  readonly extPolicy?: DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy[] | cdktf.IResolvable;
  /**
  * jwt_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#jwt_info Deployment#jwt_info}
  */
  readonly jwtInfo?: DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo[] | cdktf.IResolvable;
}

export function deploymentEdgeviewPolicyEdgeviewcfgToTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation_id: cdktf.numberToTerraform(struct!.generationId),
    token: cdktf.stringToTerraform(struct!.token),
    app_policy: cdktf.listMapper(deploymentEdgeviewPolicyEdgeviewcfgAppPolicyToTerraform, true)(struct!.appPolicy),
    dev_policy: cdktf.listMapper(deploymentEdgeviewPolicyEdgeviewcfgDevPolicyToTerraform, true)(struct!.devPolicy),
    ext_policy: cdktf.listMapper(deploymentEdgeviewPolicyEdgeviewcfgExtPolicyToTerraform, true)(struct!.extPolicy),
    jwt_info: cdktf.listMapper(deploymentEdgeviewPolicyEdgeviewcfgJwtInfoToTerraform, true)(struct!.jwtInfo),
  }
}


export function deploymentEdgeviewPolicyEdgeviewcfgToHclTerraform(struct?: DeploymentEdgeviewPolicyEdgeviewcfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation_id: {
      value: cdktf.numberToHclTerraform(struct!.generationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_policy: {
      value: cdktf.listMapperHcl(deploymentEdgeviewPolicyEdgeviewcfgAppPolicyToHclTerraform, true)(struct!.appPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentEdgeviewPolicyEdgeviewcfgAppPolicyList",
    },
    dev_policy: {
      value: cdktf.listMapperHcl(deploymentEdgeviewPolicyEdgeviewcfgDevPolicyToHclTerraform, true)(struct!.devPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentEdgeviewPolicyEdgeviewcfgDevPolicyList",
    },
    ext_policy: {
      value: cdktf.listMapperHcl(deploymentEdgeviewPolicyEdgeviewcfgExtPolicyToHclTerraform, true)(struct!.extPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentEdgeviewPolicyEdgeviewcfgExtPolicyList",
    },
    jwt_info: {
      value: cdktf.listMapperHcl(deploymentEdgeviewPolicyEdgeviewcfgJwtInfoToHclTerraform, true)(struct!.jwtInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentEdgeviewPolicyEdgeviewcfgJwtInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEdgeviewPolicyEdgeviewcfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEdgeviewPolicyEdgeviewcfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationId = this._generationId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._appPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPolicy = this._appPolicy?.internalValue;
    }
    if (this._devPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devPolicy = this._devPolicy?.internalValue;
    }
    if (this._extPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extPolicy = this._extPolicy?.internalValue;
    }
    if (this._jwtInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtInfo = this._jwtInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicyEdgeviewcfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generationId = undefined;
      this._token = undefined;
      this._appPolicy.internalValue = undefined;
      this._devPolicy.internalValue = undefined;
      this._extPolicy.internalValue = undefined;
      this._jwtInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generationId = value.generationId;
      this._token = value.token;
      this._appPolicy.internalValue = value.appPolicy;
      this._devPolicy.internalValue = value.devPolicy;
      this._extPolicy.internalValue = value.extPolicy;
      this._jwtInfo.internalValue = value.jwtInfo;
    }
  }

  // generation_id - computed: false, optional: true, required: false
  private _generationId?: number; 
  public get generationId() {
    return this.getNumberAttribute('generation_id');
  }
  public set generationId(value: number) {
    this._generationId = value;
  }
  public resetGenerationId() {
    this._generationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationIdInput() {
    return this._generationId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // app_policy - computed: false, optional: true, required: false
  private _appPolicy = new DeploymentEdgeviewPolicyEdgeviewcfgAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }
  public putAppPolicy(value: DeploymentEdgeviewPolicyEdgeviewcfgAppPolicy[] | cdktf.IResolvable) {
    this._appPolicy.internalValue = value;
  }
  public resetAppPolicy() {
    this._appPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPolicyInput() {
    return this._appPolicy.internalValue;
  }

  // dev_policy - computed: false, optional: true, required: false
  private _devPolicy = new DeploymentEdgeviewPolicyEdgeviewcfgDevPolicyList(this, "dev_policy", false);
  public get devPolicy() {
    return this._devPolicy;
  }
  public putDevPolicy(value: DeploymentEdgeviewPolicyEdgeviewcfgDevPolicy[] | cdktf.IResolvable) {
    this._devPolicy.internalValue = value;
  }
  public resetDevPolicy() {
    this._devPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devPolicyInput() {
    return this._devPolicy.internalValue;
  }

  // ext_policy - computed: false, optional: true, required: false
  private _extPolicy = new DeploymentEdgeviewPolicyEdgeviewcfgExtPolicyList(this, "ext_policy", false);
  public get extPolicy() {
    return this._extPolicy;
  }
  public putExtPolicy(value: DeploymentEdgeviewPolicyEdgeviewcfgExtPolicy[] | cdktf.IResolvable) {
    this._extPolicy.internalValue = value;
  }
  public resetExtPolicy() {
    this._extPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extPolicyInput() {
    return this._extPolicy.internalValue;
  }

  // jwt_info - computed: false, optional: true, required: false
  private _jwtInfo = new DeploymentEdgeviewPolicyEdgeviewcfgJwtInfoList(this, "jwt_info", false);
  public get jwtInfo() {
    return this._jwtInfo;
  }
  public putJwtInfo(value: DeploymentEdgeviewPolicyEdgeviewcfgJwtInfo[] | cdktf.IResolvable) {
    this._jwtInfo.internalValue = value;
  }
  public resetJwtInfo() {
    this._jwtInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInfoInput() {
    return this._jwtInfo.internalValue;
  }
}

export class DeploymentEdgeviewPolicyEdgeviewcfgList extends cdktf.ComplexList {
  public internalValue? : DeploymentEdgeviewPolicyEdgeviewcfg[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEdgeviewPolicyEdgeviewcfgOutputReference {
    return new DeploymentEdgeviewPolicyEdgeviewcfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicyMetaDataRevision {
}

export function deploymentEdgeviewPolicyMetaDataRevisionToTerraform(struct?: DeploymentEdgeviewPolicyMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentEdgeviewPolicyMetaDataRevisionToHclTerraform(struct?: DeploymentEdgeviewPolicyMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentEdgeviewPolicyMetaDataRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentEdgeviewPolicyMetaDataRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicyMetaDataRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentEdgeviewPolicyMetaDataRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentEdgeviewPolicyMetaDataRevisionOutputReference {
    return new DeploymentEdgeviewPolicyMetaDataRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicyMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy that will be used for targeting by devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#policy_target_condition Deployment#policy_target_condition}
  */
  readonly policyTargetCondition?: { [key: string]: string };
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
}

export function deploymentEdgeviewPolicyMetaDataToTerraform(struct?: DeploymentEdgeviewPolicyMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy_target_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.policyTargetCondition),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function deploymentEdgeviewPolicyMetaDataToHclTerraform(struct?: DeploymentEdgeviewPolicyMetaData | cdktf.IResolvable): any {
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
    policy_target_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.policyTargetCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEdgeviewPolicyMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEdgeviewPolicyMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyTargetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTargetCondition = this._policyTargetCondition;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicyMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._policyTargetCondition = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._policyTargetCondition = value.policyTargetCondition;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_target_condition - computed: false, optional: true, required: false
  private _policyTargetCondition?: { [key: string]: string }; 
  public get policyTargetCondition() {
    return this.getStringMapAttribute('policy_target_condition');
  }
  public set policyTargetCondition(value: { [key: string]: string }) {
    this._policyTargetCondition = value;
  }
  public resetPolicyTargetCondition() {
    this._policyTargetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTargetConditionInput() {
    return this._policyTargetCondition;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DeploymentEdgeviewPolicyMetaDataRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class DeploymentEdgeviewPolicyMetaDataList extends cdktf.ComplexList {
  public internalValue? : DeploymentEdgeviewPolicyMetaData[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEdgeviewPolicyMetaDataOutputReference {
    return new DeploymentEdgeviewPolicyMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentEdgeviewPolicy {
  /**
  * Allow inherit instance to change access policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#access_allow_change Deployment#access_allow_change}
  */
  readonly accessAllowChange?: boolean | cdktf.IResolvable;
  /**
  * Allow device to enable Edgeview in this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#edgeview_allow Deployment#edgeview_allow}
  */
  readonly edgeviewAllow: boolean | cdktf.IResolvable;
  /**
  * Maximum seconds allowed for Edgeview session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#max_expire_sec Deployment#max_expire_sec}
  */
  readonly maxExpireSec?: number;
  /**
  * Maximum instances allowed for Edgeview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#max_inst Deployment#max_inst}
  */
  readonly maxInst?: number;
  /**
  * edgeviewcfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#edgeviewcfg Deployment#edgeviewcfg}
  */
  readonly edgeviewcfg?: DeploymentEdgeviewPolicyEdgeviewcfg[] | cdktf.IResolvable;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#meta_data Deployment#meta_data}
  */
  readonly metaData?: DeploymentEdgeviewPolicyMetaData[] | cdktf.IResolvable;
}

export function deploymentEdgeviewPolicyToTerraform(struct?: DeploymentEdgeviewPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_allow_change: cdktf.booleanToTerraform(struct!.accessAllowChange),
    edgeview_allow: cdktf.booleanToTerraform(struct!.edgeviewAllow),
    max_expire_sec: cdktf.numberToTerraform(struct!.maxExpireSec),
    max_inst: cdktf.numberToTerraform(struct!.maxInst),
    edgeviewcfg: cdktf.listMapper(deploymentEdgeviewPolicyEdgeviewcfgToTerraform, true)(struct!.edgeviewcfg),
    meta_data: cdktf.listMapper(deploymentEdgeviewPolicyMetaDataToTerraform, true)(struct!.metaData),
  }
}


export function deploymentEdgeviewPolicyToHclTerraform(struct?: DeploymentEdgeviewPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_allow_change: {
      value: cdktf.booleanToHclTerraform(struct!.accessAllowChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edgeview_allow: {
      value: cdktf.booleanToHclTerraform(struct!.edgeviewAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_expire_sec: {
      value: cdktf.numberToHclTerraform(struct!.maxExpireSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_inst: {
      value: cdktf.numberToHclTerraform(struct!.maxInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    edgeviewcfg: {
      value: cdktf.listMapperHcl(deploymentEdgeviewPolicyEdgeviewcfgToHclTerraform, true)(struct!.edgeviewcfg),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentEdgeviewPolicyEdgeviewcfgList",
    },
    meta_data: {
      value: cdktf.listMapperHcl(deploymentEdgeviewPolicyMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentEdgeviewPolicyMetaDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEdgeviewPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEdgeviewPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessAllowChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessAllowChange = this._accessAllowChange;
    }
    if (this._edgeviewAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeviewAllow = this._edgeviewAllow;
    }
    if (this._maxExpireSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpireSec = this._maxExpireSec;
    }
    if (this._maxInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInst = this._maxInst;
    }
    if (this._edgeviewcfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeviewcfg = this._edgeviewcfg?.internalValue;
    }
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEdgeviewPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessAllowChange = undefined;
      this._edgeviewAllow = undefined;
      this._maxExpireSec = undefined;
      this._maxInst = undefined;
      this._edgeviewcfg.internalValue = undefined;
      this._metaData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessAllowChange = value.accessAllowChange;
      this._edgeviewAllow = value.edgeviewAllow;
      this._maxExpireSec = value.maxExpireSec;
      this._maxInst = value.maxInst;
      this._edgeviewcfg.internalValue = value.edgeviewcfg;
      this._metaData.internalValue = value.metaData;
    }
  }

  // access_allow_change - computed: false, optional: true, required: false
  private _accessAllowChange?: boolean | cdktf.IResolvable; 
  public get accessAllowChange() {
    return this.getBooleanAttribute('access_allow_change');
  }
  public set accessAllowChange(value: boolean | cdktf.IResolvable) {
    this._accessAllowChange = value;
  }
  public resetAccessAllowChange() {
    this._accessAllowChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAllowChangeInput() {
    return this._accessAllowChange;
  }

  // edgeview_allow - computed: false, optional: false, required: true
  private _edgeviewAllow?: boolean | cdktf.IResolvable; 
  public get edgeviewAllow() {
    return this.getBooleanAttribute('edgeview_allow');
  }
  public set edgeviewAllow(value: boolean | cdktf.IResolvable) {
    this._edgeviewAllow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewAllowInput() {
    return this._edgeviewAllow;
  }

  // max_expire_sec - computed: false, optional: true, required: false
  private _maxExpireSec?: number; 
  public get maxExpireSec() {
    return this.getNumberAttribute('max_expire_sec');
  }
  public set maxExpireSec(value: number) {
    this._maxExpireSec = value;
  }
  public resetMaxExpireSec() {
    this._maxExpireSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpireSecInput() {
    return this._maxExpireSec;
  }

  // max_inst - computed: false, optional: true, required: false
  private _maxInst?: number; 
  public get maxInst() {
    return this.getNumberAttribute('max_inst');
  }
  public set maxInst(value: number) {
    this._maxInst = value;
  }
  public resetMaxInst() {
    this._maxInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstInput() {
    return this._maxInst;
  }

  // edgeviewcfg - computed: false, optional: true, required: false
  private _edgeviewcfg = new DeploymentEdgeviewPolicyEdgeviewcfgList(this, "edgeviewcfg", false);
  public get edgeviewcfg() {
    return this._edgeviewcfg;
  }
  public putEdgeviewcfg(value: DeploymentEdgeviewPolicyEdgeviewcfg[] | cdktf.IResolvable) {
    this._edgeviewcfg.internalValue = value;
  }
  public resetEdgeviewcfg() {
    this._edgeviewcfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewcfgInput() {
    return this._edgeviewcfg.internalValue;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new DeploymentEdgeviewPolicyMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: DeploymentEdgeviewPolicyMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }
}

export class DeploymentEdgeviewPolicyList extends cdktf.ComplexList {
  public internalValue? : DeploymentEdgeviewPolicy[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEdgeviewPolicyOutputReference {
    return new DeploymentEdgeviewPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentIntegrationPolicyRevision {
}

export function deploymentIntegrationPolicyRevisionToTerraform(struct?: DeploymentIntegrationPolicyRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentIntegrationPolicyRevisionToHclTerraform(struct?: DeploymentIntegrationPolicyRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentIntegrationPolicyRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentIntegrationPolicyRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentIntegrationPolicyRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentIntegrationPolicyRevisionList extends cdktf.ComplexList {
  public internalValue? : DeploymentIntegrationPolicyRevision[] | cdktf.IResolvable

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
  public get(index: number): DeploymentIntegrationPolicyRevisionOutputReference {
    return new DeploymentIntegrationPolicyRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentIntegrationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#id Deployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#revision Deployment#revision}
  */
  readonly revision?: DeploymentIntegrationPolicyRevision[] | cdktf.IResolvable;
}

export function deploymentIntegrationPolicyToTerraform(struct?: DeploymentIntegrationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    revision: cdktf.listMapper(deploymentIntegrationPolicyRevisionToTerraform, true)(struct!.revision),
  }
}


export function deploymentIntegrationPolicyToHclTerraform(struct?: DeploymentIntegrationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.listMapperHcl(deploymentIntegrationPolicyRevisionToHclTerraform, true)(struct!.revision),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentIntegrationPolicyRevisionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentIntegrationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentIntegrationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._revision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentIntegrationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._title = undefined;
      this._revision.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._title = value.title;
      this._revision.internalValue = value.revision;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new DeploymentIntegrationPolicyRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: DeploymentIntegrationPolicyRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }
}

export class DeploymentIntegrationPolicyList extends cdktf.ComplexList {
  public internalValue? : DeploymentIntegrationPolicy[] | cdktf.IResolvable

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
  public get(index: number): DeploymentIntegrationPolicyOutputReference {
    return new DeploymentIntegrationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesMetaDataRevision {
}

export function deploymentNetworkInstPoliciesMetaDataRevisionToTerraform(struct?: DeploymentNetworkInstPoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentNetworkInstPoliciesMetaDataRevisionToHclTerraform(struct?: DeploymentNetworkInstPoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentNetworkInstPoliciesMetaDataRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentNetworkInstPoliciesMetaDataRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesMetaDataRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentNetworkInstPoliciesMetaDataRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentNetworkInstPoliciesMetaDataRevisionOutputReference {
    return new DeploymentNetworkInstPoliciesMetaDataRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy that will be used for targeting by devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#policy_target_condition Deployment#policy_target_condition}
  */
  readonly policyTargetCondition?: { [key: string]: string };
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
}

export function deploymentNetworkInstPoliciesMetaDataToTerraform(struct?: DeploymentNetworkInstPoliciesMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy_target_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.policyTargetCondition),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function deploymentNetworkInstPoliciesMetaDataToHclTerraform(struct?: DeploymentNetworkInstPoliciesMetaData | cdktf.IResolvable): any {
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
    policy_target_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.policyTargetCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyTargetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTargetCondition = this._policyTargetCondition;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._policyTargetCondition = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._policyTargetCondition = value.policyTargetCondition;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_target_condition - computed: false, optional: true, required: false
  private _policyTargetCondition?: { [key: string]: string }; 
  public get policyTargetCondition() {
    return this.getStringMapAttribute('policy_target_condition');
  }
  public set policyTargetCondition(value: { [key: string]: string }) {
    this._policyTargetCondition = value;
  }
  public resetPolicyTargetCondition() {
    this._policyTargetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTargetConditionInput() {
    return this._policyTargetCondition;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DeploymentNetworkInstPoliciesMetaDataRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class DeploymentNetworkInstPoliciesMetaDataList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesMetaData[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesMetaDataOutputReference {
    return new DeploymentNetworkInstPoliciesMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#addrs Deployment#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#hostname Deployment#hostname}
  */
  readonly hostname?: string;
}

export function deploymentNetworkInstPoliciesNetInstConfigDnsListStructToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigDnsListStructToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigDnsListStructList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigDnsListStructOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#end Deployment#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#start Deployment#start}
  */
  readonly start?: string;
}

export function deploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigIp {
  /**
  * IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#dns Deployment#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#domain Deployment#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#gateway Deployment#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#mask Deployment#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ntp Deployment#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#subnet Deployment#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#dhcp_range Deployment#dhcp_range}
  */
  readonly dhcpRange?: DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesNetInstConfigIpToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigIpToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: DeploymentNetworkInstPoliciesNetInstConfigIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigIpList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigIp[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigIpOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp {
  /**
  * Service credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#credential Deployment#credential}
  */
  readonly credential?: string;
  /**
  * Service name/ service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name_or_ip Deployment#name_or_ip}
  */
  readonly nameOrIp?: string;
  /**
  * Service Point Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
}

export function deploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
      this._type = value.type;
    }
  }

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: true, required: false
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  public resetNameOrIp() {
    this._nameOrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp {
  /**
  * Allocate flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allocate Deployment#allocate}
  */
  readonly allocate?: boolean | cdktf.IResolvable;
  /**
  * Allocation Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allocationprefix Deployment#allocationprefix}
  */
  readonly allocationprefix?: string;
  /**
  * Allocation Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#allocationprefixlen Deployment#allocationprefixlen}
  */
  readonly allocationprefixlen?: number;
  /**
  * Export Private flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#exportprivate Deployment#exportprivate}
  */
  readonly exportprivate?: boolean | cdktf.IResolvable;
  /**
  * lisp id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#lispiid Deployment#lispiid}
  */
  readonly lispiid?: number;
  /**
  * sp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#sp Deployment#sp}
  */
  readonly sp?: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesNetInstConfigOpaqueLispToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate: cdktf.booleanToTerraform(struct!.allocate),
    allocationprefix: cdktf.stringToTerraform(struct!.allocationprefix),
    allocationprefixlen: cdktf.numberToTerraform(struct!.allocationprefixlen),
    exportprivate: cdktf.booleanToTerraform(struct!.exportprivate),
    lispiid: cdktf.numberToTerraform(struct!.lispiid),
    sp: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpToTerraform, true)(struct!.sp),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigOpaqueLispToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate: {
      value: cdktf.booleanToHclTerraform(struct!.allocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allocationprefix: {
      value: cdktf.stringToHclTerraform(struct!.allocationprefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocationprefixlen: {
      value: cdktf.numberToHclTerraform(struct!.allocationprefixlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exportprivate: {
      value: cdktf.booleanToHclTerraform(struct!.exportprivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lispiid: {
      value: cdktf.numberToHclTerraform(struct!.lispiid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpToHclTerraform, true)(struct!.sp),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocate = this._allocate;
    }
    if (this._allocationprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefix = this._allocationprefix;
    }
    if (this._allocationprefixlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefixlen = this._allocationprefixlen;
    }
    if (this._exportprivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportprivate = this._exportprivate;
    }
    if (this._lispiid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispiid = this._lispiid;
    }
    if (this._sp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocate = undefined;
      this._allocationprefix = undefined;
      this._allocationprefixlen = undefined;
      this._exportprivate = undefined;
      this._lispiid = undefined;
      this._sp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocate = value.allocate;
      this._allocationprefix = value.allocationprefix;
      this._allocationprefixlen = value.allocationprefixlen;
      this._exportprivate = value.exportprivate;
      this._lispiid = value.lispiid;
      this._sp.internalValue = value.sp;
    }
  }

  // allocate - computed: false, optional: true, required: false
  private _allocate?: boolean | cdktf.IResolvable; 
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }
  public set allocate(value: boolean | cdktf.IResolvable) {
    this._allocate = value;
  }
  public resetAllocate() {
    this._allocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateInput() {
    return this._allocate;
  }

  // allocationprefix - computed: false, optional: true, required: false
  private _allocationprefix?: string; 
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }
  public set allocationprefix(value: string) {
    this._allocationprefix = value;
  }
  public resetAllocationprefix() {
    this._allocationprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixInput() {
    return this._allocationprefix;
  }

  // allocationprefixlen - computed: false, optional: true, required: false
  private _allocationprefixlen?: number; 
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }
  public set allocationprefixlen(value: number) {
    this._allocationprefixlen = value;
  }
  public resetAllocationprefixlen() {
    this._allocationprefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixlenInput() {
    return this._allocationprefixlen;
  }

  // exportprivate - computed: false, optional: true, required: false
  private _exportprivate?: boolean | cdktf.IResolvable; 
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }
  public set exportprivate(value: boolean | cdktf.IResolvable) {
    this._exportprivate = value;
  }
  public resetExportprivate() {
    this._exportprivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportprivateInput() {
    return this._exportprivate;
  }

  // lispiid - computed: false, optional: true, required: false
  private _lispiid?: number; 
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }
  public set lispiid(value: number) {
    this._lispiid = value;
  }
  public resetLispiid() {
    this._lispiid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispiidInput() {
    return this._lispiid;
  }

  // sp - computed: false, optional: true, required: false
  private _sp = new DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
  public putSp(value: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispSp[] | cdktf.IResolvable) {
    this._sp.internalValue = value;
  }
  public resetSp() {
    this._sp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigOpaque {
  /**
  * base64 encoded string of opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#oconfig Deployment#oconfig}
  */
  readonly oconfig?: string;
  /**
  * type of Opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
  /**
  * lisp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#lisp Deployment#lisp}
  */
  readonly lisp?: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesNetInstConfigOpaqueToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    type: cdktf.stringToTerraform(struct!.type),
    lisp: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigOpaqueLispToTerraform, true)(struct!.lisp),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigOpaqueToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lisp: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigOpaqueLispToHclTerraform, true)(struct!.lisp),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigOpaqueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigOpaque | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._lisp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lisp = this._lisp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigOpaque | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oconfig = undefined;
      this._type = undefined;
      this._lisp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oconfig = value.oconfig;
      this._type = value.type;
      this._lisp.internalValue = value.lisp;
    }
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // lisp - computed: false, optional: true, required: false
  private _lisp = new DeploymentNetworkInstPoliciesNetInstConfigOpaqueLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }
  public putLisp(value: DeploymentNetworkInstPoliciesNetInstConfigOpaqueLisp[] | cdktf.IResolvable) {
    this._lisp.internalValue = value;
  }
  public resetLisp() {
    this._lisp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInput() {
    return this._lisp.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigOpaqueList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigOpaque[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigOpaqueOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint {
  /**
  * IP address or FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#host Deployment#host}
  */
  readonly host?: string;
  /**
  * TCP port required for CONNECTIVITY_PROBE_METHOD_TCP.
  * Leave empty for CONNECTIVITY_PROBE_METHOD_ICMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#port Deployment#port}
  */
  readonly port?: number;
}

export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig {
  /**
  * Method to use to determine the connectivity status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#probe_method Deployment#probe_method}
  */
  readonly probeMethod?: string;
  /**
  * probe_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#probe_endpoint Deployment#probe_endpoint}
  */
  readonly probeEndpoint?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe_method: cdktf.stringToTerraform(struct!.probeMethod),
    probe_endpoint: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform, true)(struct!.probeEndpoint),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe_method: {
      value: cdktf.stringToHclTerraform(struct!.probeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_endpoint: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform, true)(struct!.probeEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeMethod = this._probeMethod;
    }
    if (this._probeEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeEndpoint = this._probeEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probeMethod = undefined;
      this._probeEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probeMethod = value.probeMethod;
      this._probeEndpoint.internalValue = value.probeEndpoint;
    }
  }

  // probe_method - computed: false, optional: true, required: false
  private _probeMethod?: string; 
  public get probeMethod() {
    return this.getStringAttribute('probe_method');
  }
  public set probeMethod(value: string) {
    this._probeMethod = value;
  }
  public resetProbeMethod() {
    this._probeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeMethodInput() {
    return this._probeMethod;
  }

  // probe_endpoint - computed: false, optional: true, required: false
  private _probeEndpoint = new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList(this, "probe_endpoint", false);
  public get probeEndpoint() {
    return this._probeEndpoint;
  }
  public putProbeEndpoint(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable) {
    this._probeEndpoint.internalValue = value;
  }
  public resetProbeEndpoint() {
    this._probeEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeEndpointInput() {
    return this._probeEndpoint.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig {
  /**
  * Enable gateway ping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#enable_gateway_ping Deployment#enable_gateway_ping}
  */
  readonly enableGatewayPing?: boolean | cdktf.IResolvable;
  /**
  * Ping max cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ping_max_cost Deployment#ping_max_cost}
  */
  readonly pingMaxCost?: number;
  /**
  * Prefer lower cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#prefer_lower_cost Deployment#prefer_lower_cost}
  */
  readonly preferLowerCost?: boolean | cdktf.IResolvable;
  /**
  * Prefer stronger WWAN signal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#prefer_stronger_wwan_signal Deployment#prefer_stronger_wwan_signal}
  */
  readonly preferStrongerWwanSignal?: boolean | cdktf.IResolvable;
  /**
  * custom_probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#custom_probe_config Deployment#custom_probe_config}
  */
  readonly customProbeConfig?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_gateway_ping: cdktf.booleanToTerraform(struct!.enableGatewayPing),
    ping_max_cost: cdktf.numberToTerraform(struct!.pingMaxCost),
    prefer_lower_cost: cdktf.booleanToTerraform(struct!.preferLowerCost),
    prefer_stronger_wwan_signal: cdktf.booleanToTerraform(struct!.preferStrongerWwanSignal),
    custom_probe_config: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigToTerraform, true)(struct!.customProbeConfig),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_gateway_ping: {
      value: cdktf.booleanToHclTerraform(struct!.enableGatewayPing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping_max_cost: {
      value: cdktf.numberToHclTerraform(struct!.pingMaxCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_lower_cost: {
      value: cdktf.booleanToHclTerraform(struct!.preferLowerCost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_stronger_wwan_signal: {
      value: cdktf.booleanToHclTerraform(struct!.preferStrongerWwanSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_probe_config: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigToHclTerraform, true)(struct!.customProbeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGatewayPing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGatewayPing = this._enableGatewayPing;
    }
    if (this._pingMaxCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingMaxCost = this._pingMaxCost;
    }
    if (this._preferLowerCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferLowerCost = this._preferLowerCost;
    }
    if (this._preferStrongerWwanSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferStrongerWwanSignal = this._preferStrongerWwanSignal;
    }
    if (this._customProbeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProbeConfig = this._customProbeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableGatewayPing = undefined;
      this._pingMaxCost = undefined;
      this._preferLowerCost = undefined;
      this._preferStrongerWwanSignal = undefined;
      this._customProbeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableGatewayPing = value.enableGatewayPing;
      this._pingMaxCost = value.pingMaxCost;
      this._preferLowerCost = value.preferLowerCost;
      this._preferStrongerWwanSignal = value.preferStrongerWwanSignal;
      this._customProbeConfig.internalValue = value.customProbeConfig;
    }
  }

  // enable_gateway_ping - computed: false, optional: true, required: false
  private _enableGatewayPing?: boolean | cdktf.IResolvable; 
  public get enableGatewayPing() {
    return this.getBooleanAttribute('enable_gateway_ping');
  }
  public set enableGatewayPing(value: boolean | cdktf.IResolvable) {
    this._enableGatewayPing = value;
  }
  public resetEnableGatewayPing() {
    this._enableGatewayPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayPingInput() {
    return this._enableGatewayPing;
  }

  // ping_max_cost - computed: false, optional: true, required: false
  private _pingMaxCost?: number; 
  public get pingMaxCost() {
    return this.getNumberAttribute('ping_max_cost');
  }
  public set pingMaxCost(value: number) {
    this._pingMaxCost = value;
  }
  public resetPingMaxCost() {
    this._pingMaxCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingMaxCostInput() {
    return this._pingMaxCost;
  }

  // prefer_lower_cost - computed: false, optional: true, required: false
  private _preferLowerCost?: boolean | cdktf.IResolvable; 
  public get preferLowerCost() {
    return this.getBooleanAttribute('prefer_lower_cost');
  }
  public set preferLowerCost(value: boolean | cdktf.IResolvable) {
    this._preferLowerCost = value;
  }
  public resetPreferLowerCost() {
    this._preferLowerCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferLowerCostInput() {
    return this._preferLowerCost;
  }

  // prefer_stronger_wwan_signal - computed: false, optional: true, required: false
  private _preferStrongerWwanSignal?: boolean | cdktf.IResolvable; 
  public get preferStrongerWwanSignal() {
    return this.getBooleanAttribute('prefer_stronger_wwan_signal');
  }
  public set preferStrongerWwanSignal(value: boolean | cdktf.IResolvable) {
    this._preferStrongerWwanSignal = value;
  }
  public resetPreferStrongerWwanSignal() {
    this._preferStrongerWwanSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferStrongerWwanSignalInput() {
    return this._preferStrongerWwanSignal;
  }

  // custom_probe_config - computed: false, optional: true, required: false
  private _customProbeConfig = new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfigList(this, "custom_probe_config", false);
  public get customProbeConfig() {
    return this._customProbeConfig;
  }
  public putCustomProbeConfig(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable) {
    this._customProbeConfig.internalValue = value;
  }
  public resetCustomProbeConfig() {
    this._customProbeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProbeConfigInput() {
    return this._customProbeConfig.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#gateway Deployment#gateway}
  */
  readonly gateway?: string;
  /**
  * Output Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#output_port Deployment#output_port}
  */
  readonly outputPort?: string;
  /**
  * IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#prefix Deployment#prefix}
  */
  readonly prefix?: string;
  /**
  * probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#probe_config Deployment#probe_config}
  */
  readonly probeConfig?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    output_port: cdktf.stringToTerraform(struct!.outputPort),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    probe_config: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigToTerraform, true)(struct!.probeConfig),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigStaticRoutesToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_port: {
      value: cdktf.stringToHclTerraform(struct!.outputPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_config: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigToHclTerraform, true)(struct!.probeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._outputPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPort = this._outputPort;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._probeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeConfig = this._probeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._outputPort = undefined;
      this._prefix = undefined;
      this._probeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._outputPort = value.outputPort;
      this._prefix = value.prefix;
      this._probeConfig.internalValue = value.probeConfig;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // output_port - computed: false, optional: true, required: false
  private _outputPort?: string; 
  public get outputPort() {
    return this.getStringAttribute('output_port');
  }
  public set outputPort(value: string) {
    this._outputPort = value;
  }
  public resetOutputPort() {
    this._outputPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPortInput() {
    return this._outputPort;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // probe_config - computed: false, optional: true, required: false
  private _probeConfig = new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfigList(this, "probe_config", false);
  public get probeConfig() {
    return this._probeConfig;
  }
  public putProbeConfig(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesProbeConfig[] | cdktf.IResolvable) {
    this._probeConfig.internalValue = value;
  }
  public resetProbeConfig() {
    this._probeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeConfigInput() {
    return this._probeConfig.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPoliciesNetInstConfig {
  /**
  * flag to indicate if this is the default network instance for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#device_default Deployment#device_default}
  */
  readonly deviceDefault?: boolean | cdktf.IResolvable;
  /**
  * Kind of Network Instance ( Local, Switch etc )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#kind Deployment#kind}
  */
  readonly kind?: string;
  /**
  * name of port mapping in the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#port_tags Deployment#port_tags}
  */
  readonly portTags?: { [key: string]: string };
  /**
  * Automatically propagate connected routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#propagate_connected_routes Deployment#propagate_connected_routes}
  */
  readonly propagateConnectedRoutes?: boolean | cdktf.IResolvable;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of DHCP for this Network Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#dns_list Deployment#dns_list}
  */
  readonly dnsList?: DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#ip Deployment#ip}
  */
  readonly ip?: DeploymentNetworkInstPoliciesNetInstConfigIp[] | cdktf.IResolvable;
  /**
  * opaque block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#opaque Deployment#opaque}
  */
  readonly opaque?: DeploymentNetworkInstPoliciesNetInstConfigOpaque[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#static_routes Deployment#static_routes}
  */
  readonly staticRoutes?: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesNetInstConfigToTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_default: cdktf.booleanToTerraform(struct!.deviceDefault),
    kind: cdktf.stringToTerraform(struct!.kind),
    port: cdktf.stringToTerraform(struct!.port),
    port_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.portTags),
    propagate_connected_routes: cdktf.booleanToTerraform(struct!.propagateConnectedRoutes),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    dns_list: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigDnsListStructToTerraform, true)(struct!.dnsList),
    ip: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigIpToTerraform, true)(struct!.ip),
    opaque: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigOpaqueToTerraform, true)(struct!.opaque),
    static_routes: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function deploymentNetworkInstPoliciesNetInstConfigToHclTerraform(struct?: DeploymentNetworkInstPoliciesNetInstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_default: {
      value: cdktf.booleanToHclTerraform(struct!.deviceDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.portTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    propagate_connected_routes: {
      value: cdktf.booleanToHclTerraform(struct!.propagateConnectedRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_list: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigDnsListStructList",
    },
    ip: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigIpList",
    },
    opaque: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigOpaqueToHclTerraform, true)(struct!.opaque),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigOpaqueList",
    },
    static_routes: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesNetInstConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPoliciesNetInstConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefault = this._deviceDefault;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTags = this._portTags;
    }
    if (this._propagateConnectedRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateConnectedRoutes = this._propagateConnectedRoutes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._opaque?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaque = this._opaque?.internalValue;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPoliciesNetInstConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceDefault = undefined;
      this._kind = undefined;
      this._port = undefined;
      this._portTags = undefined;
      this._propagateConnectedRoutes = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._dnsList.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._opaque.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceDefault = value.deviceDefault;
      this._kind = value.kind;
      this._port = value.port;
      this._portTags = value.portTags;
      this._propagateConnectedRoutes = value.propagateConnectedRoutes;
      this._tags = value.tags;
      this._type = value.type;
      this._dnsList.internalValue = value.dnsList;
      this._ip.internalValue = value.ip;
      this._opaque.internalValue = value.opaque;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // device_default - computed: false, optional: true, required: false
  private _deviceDefault?: boolean | cdktf.IResolvable; 
  public get deviceDefault() {
    return this.getBooleanAttribute('device_default');
  }
  public set deviceDefault(value: boolean | cdktf.IResolvable) {
    this._deviceDefault = value;
  }
  public resetDeviceDefault() {
    this._deviceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefaultInput() {
    return this._deviceDefault;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_tags - computed: false, optional: true, required: false
  private _portTags?: { [key: string]: string }; 
  public get portTags() {
    return this.getStringMapAttribute('port_tags');
  }
  public set portTags(value: { [key: string]: string }) {
    this._portTags = value;
  }
  public resetPortTags() {
    this._portTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTagsInput() {
    return this._portTags;
  }

  // propagate_connected_routes - computed: false, optional: true, required: false
  private _propagateConnectedRoutes?: boolean | cdktf.IResolvable; 
  public get propagateConnectedRoutes() {
    return this.getBooleanAttribute('propagate_connected_routes');
  }
  public set propagateConnectedRoutes(value: boolean | cdktf.IResolvable) {
    this._propagateConnectedRoutes = value;
  }
  public resetPropagateConnectedRoutes() {
    this._propagateConnectedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateConnectedRoutesInput() {
    return this._propagateConnectedRoutes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new DeploymentNetworkInstPoliciesNetInstConfigDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: DeploymentNetworkInstPoliciesNetInstConfigDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DeploymentNetworkInstPoliciesNetInstConfigIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DeploymentNetworkInstPoliciesNetInstConfigIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // opaque - computed: false, optional: true, required: false
  private _opaque = new DeploymentNetworkInstPoliciesNetInstConfigOpaqueList(this, "opaque", false);
  public get opaque() {
    return this._opaque;
  }
  public putOpaque(value: DeploymentNetworkInstPoliciesNetInstConfigOpaque[] | cdktf.IResolvable) {
    this._opaque.internalValue = value;
  }
  public resetOpaque() {
    this._opaque.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueInput() {
    return this._opaque.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new DeploymentNetworkInstPoliciesNetInstConfigStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: DeploymentNetworkInstPoliciesNetInstConfigStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesNetInstConfigList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPoliciesNetInstConfig[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesNetInstConfigOutputReference {
    return new DeploymentNetworkInstPoliciesNetInstConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentNetworkInstPolicies {
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#meta_data Deployment#meta_data}
  */
  readonly metaData?: DeploymentNetworkInstPoliciesMetaData[] | cdktf.IResolvable;
  /**
  * net_inst_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#net_inst_config Deployment#net_inst_config}
  */
  readonly netInstConfig?: DeploymentNetworkInstPoliciesNetInstConfig[] | cdktf.IResolvable;
}

export function deploymentNetworkInstPoliciesToTerraform(struct?: DeploymentNetworkInstPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta_data: cdktf.listMapper(deploymentNetworkInstPoliciesMetaDataToTerraform, true)(struct!.metaData),
    net_inst_config: cdktf.listMapper(deploymentNetworkInstPoliciesNetInstConfigToTerraform, true)(struct!.netInstConfig),
  }
}


export function deploymentNetworkInstPoliciesToHclTerraform(struct?: DeploymentNetworkInstPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta_data: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesMetaDataList",
    },
    net_inst_config: {
      value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesNetInstConfigToHclTerraform, true)(struct!.netInstConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentNetworkInstPoliciesNetInstConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentNetworkInstPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentNetworkInstPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    if (this._netInstConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netInstConfig = this._netInstConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentNetworkInstPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metaData.internalValue = undefined;
      this._netInstConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metaData.internalValue = value.metaData;
      this._netInstConfig.internalValue = value.netInstConfig;
    }
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new DeploymentNetworkInstPoliciesMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: DeploymentNetworkInstPoliciesMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // net_inst_config - computed: false, optional: true, required: false
  private _netInstConfig = new DeploymentNetworkInstPoliciesNetInstConfigList(this, "net_inst_config", false);
  public get netInstConfig() {
    return this._netInstConfig;
  }
  public putNetInstConfig(value: DeploymentNetworkInstPoliciesNetInstConfig[] | cdktf.IResolvable) {
    this._netInstConfig.internalValue = value;
  }
  public resetNetInstConfig() {
    this._netInstConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInstConfigInput() {
    return this._netInstConfig.internalValue;
  }
}

export class DeploymentNetworkInstPoliciesList extends cdktf.ComplexList {
  public internalValue? : DeploymentNetworkInstPolicies[] | cdktf.IResolvable

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
  public get(index: number): DeploymentNetworkInstPoliciesOutputReference {
    return new DeploymentNetworkInstPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentVolumeInstPoliciesMetaDataRevision {
}

export function deploymentVolumeInstPoliciesMetaDataRevisionToTerraform(struct?: DeploymentVolumeInstPoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentVolumeInstPoliciesMetaDataRevisionToHclTerraform(struct?: DeploymentVolumeInstPoliciesMetaDataRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentVolumeInstPoliciesMetaDataRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentVolumeInstPoliciesMetaDataRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentVolumeInstPoliciesMetaDataRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DeploymentVolumeInstPoliciesMetaDataRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentVolumeInstPoliciesMetaDataRevisionOutputReference {
    return new DeploymentVolumeInstPoliciesMetaDataRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentVolumeInstPoliciesMetaData {
  /**
  * user defined policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * user defined key-value pairs of a policy that will be used for targeting by devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#policy_target_condition Deployment#policy_target_condition}
  */
  readonly policyTargetCondition?: { [key: string]: string };
  /**
  * user defined key-value pairs of a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * user defined policy title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#title Deployment#title}
  */
  readonly title?: string;
}

export function deploymentVolumeInstPoliciesMetaDataToTerraform(struct?: DeploymentVolumeInstPoliciesMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy_target_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.policyTargetCondition),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function deploymentVolumeInstPoliciesMetaDataToHclTerraform(struct?: DeploymentVolumeInstPoliciesMetaData | cdktf.IResolvable): any {
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
    policy_target_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.policyTargetCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentVolumeInstPoliciesMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentVolumeInstPoliciesMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyTargetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTargetCondition = this._policyTargetCondition;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentVolumeInstPoliciesMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._policyTargetCondition = undefined;
      this._tags = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._policyTargetCondition = value.policyTargetCondition;
      this._tags = value.tags;
      this._title = value.title;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_target_condition - computed: false, optional: true, required: false
  private _policyTargetCondition?: { [key: string]: string }; 
  public get policyTargetCondition() {
    return this.getStringMapAttribute('policy_target_condition');
  }
  public set policyTargetCondition(value: { [key: string]: string }) {
    this._policyTargetCondition = value;
  }
  public resetPolicyTargetCondition() {
    this._policyTargetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTargetConditionInput() {
    return this._policyTargetCondition;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DeploymentVolumeInstPoliciesMetaDataRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class DeploymentVolumeInstPoliciesMetaDataList extends cdktf.ComplexList {
  public internalValue? : DeploymentVolumeInstPoliciesMetaData[] | cdktf.IResolvable

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
  public get(index: number): DeploymentVolumeInstPoliciesMetaDataOutputReference {
    return new DeploymentVolumeInstPoliciesMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentVolumeInstPoliciesVolInstConfigPurge {
  /**
  * counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#counter Deployment#counter}
  */
  readonly counter?: number;
}

export function deploymentVolumeInstPoliciesVolInstConfigPurgeToTerraform(struct?: DeploymentVolumeInstPoliciesVolInstConfigPurge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter: cdktf.numberToTerraform(struct!.counter),
  }
}


export function deploymentVolumeInstPoliciesVolInstConfigPurgeToHclTerraform(struct?: DeploymentVolumeInstPoliciesVolInstConfigPurge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter: {
      value: cdktf.numberToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentVolumeInstPoliciesVolInstConfigPurgeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentVolumeInstPoliciesVolInstConfigPurge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentVolumeInstPoliciesVolInstConfigPurge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counter = value.counter;
    }
  }

  // counter - computed: false, optional: true, required: false
  private _counter?: number; 
  public get counter() {
    return this.getNumberAttribute('counter');
  }
  public set counter(value: number) {
    this._counter = value;
  }
  public resetCounter() {
    this._counter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter;
  }
}

export class DeploymentVolumeInstPoliciesVolInstConfigPurgeList extends cdktf.ComplexList {
  public internalValue? : DeploymentVolumeInstPoliciesVolInstConfigPurge[] | cdktf.IResolvable

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
  public get(index: number): DeploymentVolumeInstPoliciesVolInstConfigPurgeOutputReference {
    return new DeploymentVolumeInstPoliciesVolInstConfigPurgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentVolumeInstPoliciesVolInstConfig {
  /**
  * Access mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#accessmode Deployment#accessmode}
  */
  readonly accessmode?: string;
  /**
  * user defined key-value pairs of a block storage, will be used for targeting content tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#block_storage_tags Deployment#block_storage_tags}
  */
  readonly blockStorageTags?: { [key: string]: string };
  /**
  * flag to keep the contents of the volume unencrypted (in clear text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#cleartext Deployment#cleartext}
  */
  readonly cleartext?: boolean | cdktf.IResolvable;
  /**
  * content tree ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#content_tree_id Deployment#content_tree_id}
  */
  readonly contentTreeId?: string;
  /**
  * user defined key-value pairs of a content tree that will be used for targeting by block storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#content_tree_target_condition Deployment#content_tree_target_condition}
  */
  readonly contentTreeTargetCondition?: { [key: string]: string };
  /**
  * name of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#image Deployment#image}
  */
  readonly image?: string;
  /**
  * label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#label Deployment#label}
  */
  readonly label?: string;
  /**
  * flag to enable the volume to be attached to multiple app instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#multiattach Deployment#multiattach}
  */
  readonly multiattach?: boolean | cdktf.IResolvable;
  /**
  * size of volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#size_bytes Deployment#size_bytes}
  */
  readonly sizeBytes?: string;
  /**
  * type of Volume Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#type Deployment#type}
  */
  readonly type?: string;
  /**
  * purge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#purge Deployment#purge}
  */
  readonly purge?: DeploymentVolumeInstPoliciesVolInstConfigPurge[] | cdktf.IResolvable;
}

export function deploymentVolumeInstPoliciesVolInstConfigToTerraform(struct?: DeploymentVolumeInstPoliciesVolInstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessmode: cdktf.stringToTerraform(struct!.accessmode),
    block_storage_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.blockStorageTags),
    cleartext: cdktf.booleanToTerraform(struct!.cleartext),
    content_tree_id: cdktf.stringToTerraform(struct!.contentTreeId),
    content_tree_target_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.contentTreeTargetCondition),
    image: cdktf.stringToTerraform(struct!.image),
    label: cdktf.stringToTerraform(struct!.label),
    multiattach: cdktf.booleanToTerraform(struct!.multiattach),
    size_bytes: cdktf.stringToTerraform(struct!.sizeBytes),
    type: cdktf.stringToTerraform(struct!.type),
    purge: cdktf.listMapper(deploymentVolumeInstPoliciesVolInstConfigPurgeToTerraform, true)(struct!.purge),
  }
}


export function deploymentVolumeInstPoliciesVolInstConfigToHclTerraform(struct?: DeploymentVolumeInstPoliciesVolInstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessmode: {
      value: cdktf.stringToHclTerraform(struct!.accessmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_storage_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.blockStorageTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cleartext: {
      value: cdktf.booleanToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_tree_id: {
      value: cdktf.stringToHclTerraform(struct!.contentTreeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_tree_target_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.contentTreeTargetCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiattach: {
      value: cdktf.booleanToHclTerraform(struct!.multiattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size_bytes: {
      value: cdktf.stringToHclTerraform(struct!.sizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purge: {
      value: cdktf.listMapperHcl(deploymentVolumeInstPoliciesVolInstConfigPurgeToHclTerraform, true)(struct!.purge),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentVolumeInstPoliciesVolInstConfigPurgeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentVolumeInstPoliciesVolInstConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentVolumeInstPoliciesVolInstConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessmode = this._accessmode;
    }
    if (this._blockStorageTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageTags = this._blockStorageTags;
    }
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    if (this._contentTreeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTreeId = this._contentTreeId;
    }
    if (this._contentTreeTargetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTreeTargetCondition = this._contentTreeTargetCondition;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._multiattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiattach = this._multiattach;
    }
    if (this._sizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeBytes = this._sizeBytes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._purge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.purge = this._purge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentVolumeInstPoliciesVolInstConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessmode = undefined;
      this._blockStorageTags = undefined;
      this._cleartext = undefined;
      this._contentTreeId = undefined;
      this._contentTreeTargetCondition = undefined;
      this._image = undefined;
      this._label = undefined;
      this._multiattach = undefined;
      this._sizeBytes = undefined;
      this._type = undefined;
      this._purge.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessmode = value.accessmode;
      this._blockStorageTags = value.blockStorageTags;
      this._cleartext = value.cleartext;
      this._contentTreeId = value.contentTreeId;
      this._contentTreeTargetCondition = value.contentTreeTargetCondition;
      this._image = value.image;
      this._label = value.label;
      this._multiattach = value.multiattach;
      this._sizeBytes = value.sizeBytes;
      this._type = value.type;
      this._purge.internalValue = value.purge;
    }
  }

  // accessmode - computed: false, optional: true, required: false
  private _accessmode?: string; 
  public get accessmode() {
    return this.getStringAttribute('accessmode');
  }
  public set accessmode(value: string) {
    this._accessmode = value;
  }
  public resetAccessmode() {
    this._accessmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessmodeInput() {
    return this._accessmode;
  }

  // block_storage_tags - computed: false, optional: true, required: false
  private _blockStorageTags?: { [key: string]: string }; 
  public get blockStorageTags() {
    return this.getStringMapAttribute('block_storage_tags');
  }
  public set blockStorageTags(value: { [key: string]: string }) {
    this._blockStorageTags = value;
  }
  public resetBlockStorageTags() {
    this._blockStorageTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageTagsInput() {
    return this._blockStorageTags;
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: boolean | cdktf.IResolvable; 
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }
  public set cleartext(value: boolean | cdktf.IResolvable) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // content_tree_id - computed: false, optional: true, required: false
  private _contentTreeId?: string; 
  public get contentTreeId() {
    return this.getStringAttribute('content_tree_id');
  }
  public set contentTreeId(value: string) {
    this._contentTreeId = value;
  }
  public resetContentTreeId() {
    this._contentTreeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTreeIdInput() {
    return this._contentTreeId;
  }

  // content_tree_target_condition - computed: false, optional: true, required: false
  private _contentTreeTargetCondition?: { [key: string]: string }; 
  public get contentTreeTargetCondition() {
    return this.getStringMapAttribute('content_tree_target_condition');
  }
  public set contentTreeTargetCondition(value: { [key: string]: string }) {
    this._contentTreeTargetCondition = value;
  }
  public resetContentTreeTargetCondition() {
    this._contentTreeTargetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTreeTargetConditionInput() {
    return this._contentTreeTargetCondition;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // multiattach - computed: false, optional: true, required: false
  private _multiattach?: boolean | cdktf.IResolvable; 
  public get multiattach() {
    return this.getBooleanAttribute('multiattach');
  }
  public set multiattach(value: boolean | cdktf.IResolvable) {
    this._multiattach = value;
  }
  public resetMultiattach() {
    this._multiattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiattachInput() {
    return this._multiattach;
  }

  // size_bytes - computed: false, optional: true, required: false
  private _sizeBytes?: string; 
  public get sizeBytes() {
    return this.getStringAttribute('size_bytes');
  }
  public set sizeBytes(value: string) {
    this._sizeBytes = value;
  }
  public resetSizeBytes() {
    this._sizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // purge - computed: false, optional: true, required: false
  private _purge = new DeploymentVolumeInstPoliciesVolInstConfigPurgeList(this, "purge", false);
  public get purge() {
    return this._purge;
  }
  public putPurge(value: DeploymentVolumeInstPoliciesVolInstConfigPurge[] | cdktf.IResolvable) {
    this._purge.internalValue = value;
  }
  public resetPurge() {
    this._purge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeInput() {
    return this._purge.internalValue;
  }
}

export class DeploymentVolumeInstPoliciesVolInstConfigList extends cdktf.ComplexList {
  public internalValue? : DeploymentVolumeInstPoliciesVolInstConfig[] | cdktf.IResolvable

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
  public get(index: number): DeploymentVolumeInstPoliciesVolInstConfigOutputReference {
    return new DeploymentVolumeInstPoliciesVolInstConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentVolumeInstPolicies {
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#meta_data Deployment#meta_data}
  */
  readonly metaData?: DeploymentVolumeInstPoliciesMetaData[] | cdktf.IResolvable;
  /**
  * vol_inst_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#vol_inst_config Deployment#vol_inst_config}
  */
  readonly volInstConfig?: DeploymentVolumeInstPoliciesVolInstConfig[] | cdktf.IResolvable;
}

export function deploymentVolumeInstPoliciesToTerraform(struct?: DeploymentVolumeInstPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta_data: cdktf.listMapper(deploymentVolumeInstPoliciesMetaDataToTerraform, true)(struct!.metaData),
    vol_inst_config: cdktf.listMapper(deploymentVolumeInstPoliciesVolInstConfigToTerraform, true)(struct!.volInstConfig),
  }
}


export function deploymentVolumeInstPoliciesToHclTerraform(struct?: DeploymentVolumeInstPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta_data: {
      value: cdktf.listMapperHcl(deploymentVolumeInstPoliciesMetaDataToHclTerraform, true)(struct!.metaData),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentVolumeInstPoliciesMetaDataList",
    },
    vol_inst_config: {
      value: cdktf.listMapperHcl(deploymentVolumeInstPoliciesVolInstConfigToHclTerraform, true)(struct!.volInstConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentVolumeInstPoliciesVolInstConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentVolumeInstPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentVolumeInstPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metaData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaData = this._metaData?.internalValue;
    }
    if (this._volInstConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volInstConfig = this._volInstConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentVolumeInstPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metaData.internalValue = undefined;
      this._volInstConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metaData.internalValue = value.metaData;
      this._volInstConfig.internalValue = value.volInstConfig;
    }
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new DeploymentVolumeInstPoliciesMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: DeploymentVolumeInstPoliciesMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // vol_inst_config - computed: false, optional: true, required: false
  private _volInstConfig = new DeploymentVolumeInstPoliciesVolInstConfigList(this, "vol_inst_config", false);
  public get volInstConfig() {
    return this._volInstConfig;
  }
  public putVolInstConfig(value: DeploymentVolumeInstPoliciesVolInstConfig[] | cdktf.IResolvable) {
    this._volInstConfig.internalValue = value;
  }
  public resetVolInstConfig() {
    this._volInstConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volInstConfigInput() {
    return this._volInstConfig.internalValue;
  }
}

export class DeploymentVolumeInstPoliciesList extends cdktf.ComplexList {
  public internalValue? : DeploymentVolumeInstPolicies[] | cdktf.IResolvable

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
  public get(index: number): DeploymentVolumeInstPoliciesOutputReference {
    return new DeploymentVolumeInstPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment zedcloud_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/deployment zedcloud_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_deployment',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentTag = config.deploymentTag;
    this._name = config.name;
    this._projectId = config.projectId;
    this._title = config.title;
    this._appInstPolicies.internalValue = config.appInstPolicies;
    this._clusterPolicy.internalValue = config.clusterPolicy;
    this._devicePolicies.internalValue = config.devicePolicies;
    this._edgeviewPolicy.internalValue = config.edgeviewPolicy;
    this._integrationPolicy.internalValue = config.integrationPolicy;
    this._networkInstPolicies.internalValue = config.networkInstPolicies;
    this._volumeInstPolicies.internalValue = config.volumeInstPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_tag - computed: false, optional: true, required: false
  private _deploymentTag?: string; 
  public get deploymentTag() {
    return this.getStringAttribute('deployment_tag');
  }
  public set deploymentTag(value: string) {
    this._deploymentTag = value;
  }
  public resetDeploymentTag() {
    this._deploymentTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTagInput() {
    return this._deploymentTag;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DeploymentRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // app_inst_policies - computed: false, optional: true, required: false
  private _appInstPolicies = new DeploymentAppInstPoliciesList(this, "app_inst_policies", false);
  public get appInstPolicies() {
    return this._appInstPolicies;
  }
  public putAppInstPolicies(value: DeploymentAppInstPolicies[] | cdktf.IResolvable) {
    this._appInstPolicies.internalValue = value;
  }
  public resetAppInstPolicies() {
    this._appInstPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstPoliciesInput() {
    return this._appInstPolicies.internalValue;
  }

  // cluster_policy - computed: false, optional: true, required: false
  private _clusterPolicy = new DeploymentClusterPolicyList(this, "cluster_policy", false);
  public get clusterPolicy() {
    return this._clusterPolicy;
  }
  public putClusterPolicy(value: DeploymentClusterPolicy[] | cdktf.IResolvable) {
    this._clusterPolicy.internalValue = value;
  }
  public resetClusterPolicy() {
    this._clusterPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPolicyInput() {
    return this._clusterPolicy.internalValue;
  }

  // device_policies - computed: false, optional: true, required: false
  private _devicePolicies = new DeploymentDevicePoliciesList(this, "device_policies", false);
  public get devicePolicies() {
    return this._devicePolicies;
  }
  public putDevicePolicies(value: DeploymentDevicePolicies[] | cdktf.IResolvable) {
    this._devicePolicies.internalValue = value;
  }
  public resetDevicePolicies() {
    this._devicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePoliciesInput() {
    return this._devicePolicies.internalValue;
  }

  // edgeview_policy - computed: false, optional: true, required: false
  private _edgeviewPolicy = new DeploymentEdgeviewPolicyList(this, "edgeview_policy", false);
  public get edgeviewPolicy() {
    return this._edgeviewPolicy;
  }
  public putEdgeviewPolicy(value: DeploymentEdgeviewPolicy[] | cdktf.IResolvable) {
    this._edgeviewPolicy.internalValue = value;
  }
  public resetEdgeviewPolicy() {
    this._edgeviewPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewPolicyInput() {
    return this._edgeviewPolicy.internalValue;
  }

  // integration_policy - computed: false, optional: true, required: false
  private _integrationPolicy = new DeploymentIntegrationPolicyList(this, "integration_policy", false);
  public get integrationPolicy() {
    return this._integrationPolicy;
  }
  public putIntegrationPolicy(value: DeploymentIntegrationPolicy[] | cdktf.IResolvable) {
    this._integrationPolicy.internalValue = value;
  }
  public resetIntegrationPolicy() {
    this._integrationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationPolicyInput() {
    return this._integrationPolicy.internalValue;
  }

  // network_inst_policies - computed: false, optional: true, required: false
  private _networkInstPolicies = new DeploymentNetworkInstPoliciesList(this, "network_inst_policies", false);
  public get networkInstPolicies() {
    return this._networkInstPolicies;
  }
  public putNetworkInstPolicies(value: DeploymentNetworkInstPolicies[] | cdktf.IResolvable) {
    this._networkInstPolicies.internalValue = value;
  }
  public resetNetworkInstPolicies() {
    this._networkInstPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstPoliciesInput() {
    return this._networkInstPolicies.internalValue;
  }

  // volume_inst_policies - computed: false, optional: true, required: false
  private _volumeInstPolicies = new DeploymentVolumeInstPoliciesList(this, "volume_inst_policies", false);
  public get volumeInstPolicies() {
    return this._volumeInstPolicies;
  }
  public putVolumeInstPolicies(value: DeploymentVolumeInstPolicies[] | cdktf.IResolvable) {
    this._volumeInstPolicies.internalValue = value;
  }
  public resetVolumeInstPolicies() {
    this._volumeInstPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInstPoliciesInput() {
    return this._volumeInstPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_tag: cdktf.stringToTerraform(this._deploymentTag),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      title: cdktf.stringToTerraform(this._title),
      app_inst_policies: cdktf.listMapper(deploymentAppInstPoliciesToTerraform, true)(this._appInstPolicies.internalValue),
      cluster_policy: cdktf.listMapper(deploymentClusterPolicyToTerraform, true)(this._clusterPolicy.internalValue),
      device_policies: cdktf.listMapper(deploymentDevicePoliciesToTerraform, true)(this._devicePolicies.internalValue),
      edgeview_policy: cdktf.listMapper(deploymentEdgeviewPolicyToTerraform, true)(this._edgeviewPolicy.internalValue),
      integration_policy: cdktf.listMapper(deploymentIntegrationPolicyToTerraform, true)(this._integrationPolicy.internalValue),
      network_inst_policies: cdktf.listMapper(deploymentNetworkInstPoliciesToTerraform, true)(this._networkInstPolicies.internalValue),
      volume_inst_policies: cdktf.listMapper(deploymentVolumeInstPoliciesToTerraform, true)(this._volumeInstPolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_tag: {
        value: cdktf.stringToHclTerraform(this._deploymentTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_inst_policies: {
        value: cdktf.listMapperHcl(deploymentAppInstPoliciesToHclTerraform, true)(this._appInstPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentAppInstPoliciesList",
      },
      cluster_policy: {
        value: cdktf.listMapperHcl(deploymentClusterPolicyToHclTerraform, true)(this._clusterPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentClusterPolicyList",
      },
      device_policies: {
        value: cdktf.listMapperHcl(deploymentDevicePoliciesToHclTerraform, true)(this._devicePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentDevicePoliciesList",
      },
      edgeview_policy: {
        value: cdktf.listMapperHcl(deploymentEdgeviewPolicyToHclTerraform, true)(this._edgeviewPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentEdgeviewPolicyList",
      },
      integration_policy: {
        value: cdktf.listMapperHcl(deploymentIntegrationPolicyToHclTerraform, true)(this._integrationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentIntegrationPolicyList",
      },
      network_inst_policies: {
        value: cdktf.listMapperHcl(deploymentNetworkInstPoliciesToHclTerraform, true)(this._networkInstPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentNetworkInstPoliciesList",
      },
      volume_inst_policies: {
        value: cdktf.listMapperHcl(deploymentVolumeInstPoliciesToHclTerraform, true)(this._volumeInstPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentVolumeInstPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

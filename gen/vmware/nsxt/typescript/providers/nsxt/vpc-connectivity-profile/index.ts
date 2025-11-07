// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConnectivityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#description VpcConnectivityProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#display_name VpcConnectivityProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#external_ip_blocks VpcConnectivityProfile#external_ip_blocks}
  */
  readonly externalIpBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#id VpcConnectivityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#nsx_id VpcConnectivityProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#private_tgw_ip_blocks VpcConnectivityProfile#private_tgw_ip_blocks}
  */
  readonly privateTgwIpBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#transit_gateway_path VpcConnectivityProfile#transit_gateway_path}
  */
  readonly transitGatewayPath: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#context VpcConnectivityProfile#context}
  */
  readonly context: VpcConnectivityProfileContext;
  /**
  * service_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#service_gateway VpcConnectivityProfile#service_gateway}
  */
  readonly serviceGateway?: VpcConnectivityProfileServiceGateway;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#tag VpcConnectivityProfile#tag}
  */
  readonly tag?: VpcConnectivityProfileTag[] | cdktf.IResolvable;
}
export interface VpcConnectivityProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#project_id VpcConnectivityProfile#project_id}
  */
  readonly projectId: string;
}

export function vpcConnectivityProfileContextToTerraform(struct?: VpcConnectivityProfileContextOutputReference | VpcConnectivityProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function vpcConnectivityProfileContextToHclTerraform(struct?: VpcConnectivityProfileContextOutputReference | VpcConnectivityProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcConnectivityProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConnectivityProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConnectivityProfileContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
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
}
export interface VpcConnectivityProfileServiceGatewayNatConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#enable_default_snat VpcConnectivityProfile#enable_default_snat}
  */
  readonly enableDefaultSnat?: boolean | cdktf.IResolvable;
}

export function vpcConnectivityProfileServiceGatewayNatConfigToTerraform(struct?: VpcConnectivityProfileServiceGatewayNatConfigOutputReference | VpcConnectivityProfileServiceGatewayNatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_default_snat: cdktf.booleanToTerraform(struct!.enableDefaultSnat),
  }
}


export function vpcConnectivityProfileServiceGatewayNatConfigToHclTerraform(struct?: VpcConnectivityProfileServiceGatewayNatConfigOutputReference | VpcConnectivityProfileServiceGatewayNatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_default_snat: {
      value: cdktf.booleanToHclTerraform(struct!.enableDefaultSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcConnectivityProfileServiceGatewayNatConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConnectivityProfileServiceGatewayNatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDefaultSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDefaultSnat = this._enableDefaultSnat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConnectivityProfileServiceGatewayNatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDefaultSnat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDefaultSnat = value.enableDefaultSnat;
    }
  }

  // enable_default_snat - computed: false, optional: true, required: false
  private _enableDefaultSnat?: boolean | cdktf.IResolvable; 
  public get enableDefaultSnat() {
    return this.getBooleanAttribute('enable_default_snat');
  }
  public set enableDefaultSnat(value: boolean | cdktf.IResolvable) {
    this._enableDefaultSnat = value;
  }
  public resetEnableDefaultSnat() {
    this._enableDefaultSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultSnatInput() {
    return this._enableDefaultSnat;
  }
}
export interface VpcConnectivityProfileServiceGatewayQosConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#egress_qos_profile_path VpcConnectivityProfile#egress_qos_profile_path}
  */
  readonly egressQosProfilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#ingress_qos_profile_path VpcConnectivityProfile#ingress_qos_profile_path}
  */
  readonly ingressQosProfilePath?: string;
}

export function vpcConnectivityProfileServiceGatewayQosConfigToTerraform(struct?: VpcConnectivityProfileServiceGatewayQosConfigOutputReference | VpcConnectivityProfileServiceGatewayQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_qos_profile_path: cdktf.stringToTerraform(struct!.egressQosProfilePath),
    ingress_qos_profile_path: cdktf.stringToTerraform(struct!.ingressQosProfilePath),
  }
}


export function vpcConnectivityProfileServiceGatewayQosConfigToHclTerraform(struct?: VpcConnectivityProfileServiceGatewayQosConfigOutputReference | VpcConnectivityProfileServiceGatewayQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_qos_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.egressQosProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_qos_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.ingressQosProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcConnectivityProfileServiceGatewayQosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConnectivityProfileServiceGatewayQosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressQosProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressQosProfilePath = this._egressQosProfilePath;
    }
    if (this._ingressQosProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressQosProfilePath = this._ingressQosProfilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConnectivityProfileServiceGatewayQosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressQosProfilePath = undefined;
      this._ingressQosProfilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressQosProfilePath = value.egressQosProfilePath;
      this._ingressQosProfilePath = value.ingressQosProfilePath;
    }
  }

  // egress_qos_profile_path - computed: false, optional: true, required: false
  private _egressQosProfilePath?: string; 
  public get egressQosProfilePath() {
    return this.getStringAttribute('egress_qos_profile_path');
  }
  public set egressQosProfilePath(value: string) {
    this._egressQosProfilePath = value;
  }
  public resetEgressQosProfilePath() {
    this._egressQosProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressQosProfilePathInput() {
    return this._egressQosProfilePath;
  }

  // ingress_qos_profile_path - computed: false, optional: true, required: false
  private _ingressQosProfilePath?: string; 
  public get ingressQosProfilePath() {
    return this.getStringAttribute('ingress_qos_profile_path');
  }
  public set ingressQosProfilePath(value: string) {
    this._ingressQosProfilePath = value;
  }
  public resetIngressQosProfilePath() {
    this._ingressQosProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressQosProfilePathInput() {
    return this._ingressQosProfilePath;
  }
}
export interface VpcConnectivityProfileServiceGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#edge_cluster_paths VpcConnectivityProfile#edge_cluster_paths}
  */
  readonly edgeClusterPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#enable VpcConnectivityProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * nat_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#nat_config VpcConnectivityProfile#nat_config}
  */
  readonly natConfig?: VpcConnectivityProfileServiceGatewayNatConfig;
  /**
  * qos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#qos_config VpcConnectivityProfile#qos_config}
  */
  readonly qosConfig?: VpcConnectivityProfileServiceGatewayQosConfig;
}

export function vpcConnectivityProfileServiceGatewayToTerraform(struct?: VpcConnectivityProfileServiceGatewayOutputReference | VpcConnectivityProfileServiceGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_cluster_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.edgeClusterPaths),
    enable: cdktf.booleanToTerraform(struct!.enable),
    nat_config: vpcConnectivityProfileServiceGatewayNatConfigToTerraform(struct!.natConfig),
    qos_config: vpcConnectivityProfileServiceGatewayQosConfigToTerraform(struct!.qosConfig),
  }
}


export function vpcConnectivityProfileServiceGatewayToHclTerraform(struct?: VpcConnectivityProfileServiceGatewayOutputReference | VpcConnectivityProfileServiceGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_cluster_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.edgeClusterPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_config: {
      value: vpcConnectivityProfileServiceGatewayNatConfigToHclTerraform(struct!.natConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcConnectivityProfileServiceGatewayNatConfigList",
    },
    qos_config: {
      value: vpcConnectivityProfileServiceGatewayQosConfigToHclTerraform(struct!.qosConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VpcConnectivityProfileServiceGatewayQosConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcConnectivityProfileServiceGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConnectivityProfileServiceGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeClusterPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeClusterPaths = this._edgeClusterPaths;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._natConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natConfig = this._natConfig?.internalValue;
    }
    if (this._qosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosConfig = this._qosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConnectivityProfileServiceGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edgeClusterPaths = undefined;
      this._enable = undefined;
      this._natConfig.internalValue = undefined;
      this._qosConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edgeClusterPaths = value.edgeClusterPaths;
      this._enable = value.enable;
      this._natConfig.internalValue = value.natConfig;
      this._qosConfig.internalValue = value.qosConfig;
    }
  }

  // edge_cluster_paths - computed: false, optional: true, required: false
  private _edgeClusterPaths?: string[]; 
  public get edgeClusterPaths() {
    return this.getListAttribute('edge_cluster_paths');
  }
  public set edgeClusterPaths(value: string[]) {
    this._edgeClusterPaths = value;
  }
  public resetEdgeClusterPaths() {
    this._edgeClusterPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterPathsInput() {
    return this._edgeClusterPaths;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // nat_config - computed: false, optional: true, required: false
  private _natConfig = new VpcConnectivityProfileServiceGatewayNatConfigOutputReference(this, "nat_config");
  public get natConfig() {
    return this._natConfig;
  }
  public putNatConfig(value: VpcConnectivityProfileServiceGatewayNatConfig) {
    this._natConfig.internalValue = value;
  }
  public resetNatConfig() {
    this._natConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natConfigInput() {
    return this._natConfig.internalValue;
  }

  // qos_config - computed: false, optional: true, required: false
  private _qosConfig = new VpcConnectivityProfileServiceGatewayQosConfigOutputReference(this, "qos_config");
  public get qosConfig() {
    return this._qosConfig;
  }
  public putQosConfig(value: VpcConnectivityProfileServiceGatewayQosConfig) {
    this._qosConfig.internalValue = value;
  }
  public resetQosConfig() {
    this._qosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosConfigInput() {
    return this._qosConfig.internalValue;
  }
}
export interface VpcConnectivityProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#scope VpcConnectivityProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#tag VpcConnectivityProfile#tag}
  */
  readonly tag?: string;
}

export function vpcConnectivityProfileTagToTerraform(struct?: VpcConnectivityProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function vpcConnectivityProfileTagToHclTerraform(struct?: VpcConnectivityProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcConnectivityProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcConnectivityProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConnectivityProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class VpcConnectivityProfileTagList extends cdktf.ComplexList {
  public internalValue? : VpcConnectivityProfileTag[] | cdktf.IResolvable

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
  public get(index: number): VpcConnectivityProfileTagOutputReference {
    return new VpcConnectivityProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile nsxt_vpc_connectivity_profile}
*/
export class VpcConnectivityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_connectivity_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcConnectivityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcConnectivityProfile to import
  * @param importFromId The id of the existing VpcConnectivityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcConnectivityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_connectivity_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_connectivity_profile nsxt_vpc_connectivity_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConnectivityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: VpcConnectivityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_connectivity_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._externalIpBlocks = config.externalIpBlocks;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._privateTgwIpBlocks = config.privateTgwIpBlocks;
    this._transitGatewayPath = config.transitGatewayPath;
    this._context.internalValue = config.context;
    this._serviceGateway.internalValue = config.serviceGateway;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // external_ip_blocks - computed: false, optional: true, required: false
  private _externalIpBlocks?: string[]; 
  public get externalIpBlocks() {
    return this.getListAttribute('external_ip_blocks');
  }
  public set externalIpBlocks(value: string[]) {
    this._externalIpBlocks = value;
  }
  public resetExternalIpBlocks() {
    this._externalIpBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpBlocksInput() {
    return this._externalIpBlocks;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // private_tgw_ip_blocks - computed: false, optional: true, required: false
  private _privateTgwIpBlocks?: string[]; 
  public get privateTgwIpBlocks() {
    return this.getListAttribute('private_tgw_ip_blocks');
  }
  public set privateTgwIpBlocks(value: string[]) {
    this._privateTgwIpBlocks = value;
  }
  public resetPrivateTgwIpBlocks() {
    this._privateTgwIpBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateTgwIpBlocksInput() {
    return this._privateTgwIpBlocks;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // transit_gateway_path - computed: false, optional: false, required: true
  private _transitGatewayPath?: string; 
  public get transitGatewayPath() {
    return this.getStringAttribute('transit_gateway_path');
  }
  public set transitGatewayPath(value: string) {
    this._transitGatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayPathInput() {
    return this._transitGatewayPath;
  }

  // context - computed: false, optional: false, required: true
  private _context = new VpcConnectivityProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: VpcConnectivityProfileContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // service_gateway - computed: false, optional: true, required: false
  private _serviceGateway = new VpcConnectivityProfileServiceGatewayOutputReference(this, "service_gateway");
  public get serviceGateway() {
    return this._serviceGateway;
  }
  public putServiceGateway(value: VpcConnectivityProfileServiceGateway) {
    this._serviceGateway.internalValue = value;
  }
  public resetServiceGateway() {
    this._serviceGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGatewayInput() {
    return this._serviceGateway.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new VpcConnectivityProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: VpcConnectivityProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalIpBlocks),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      private_tgw_ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateTgwIpBlocks),
      transit_gateway_path: cdktf.stringToTerraform(this._transitGatewayPath),
      context: vpcConnectivityProfileContextToTerraform(this._context.internalValue),
      service_gateway: vpcConnectivityProfileServiceGatewayToTerraform(this._serviceGateway.internalValue),
      tag: cdktf.listMapper(vpcConnectivityProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_ip_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalIpBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_tgw_ip_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateTgwIpBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_gateway_path: {
        value: cdktf.stringToHclTerraform(this._transitGatewayPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: vpcConnectivityProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcConnectivityProfileContextList",
      },
      service_gateway: {
        value: vpcConnectivityProfileServiceGatewayToHclTerraform(this._serviceGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcConnectivityProfileServiceGatewayList",
      },
      tag: {
        value: cdktf.listMapperHcl(vpcConnectivityProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcConnectivityProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

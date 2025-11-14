// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisualBuilderVbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}
  */
  readonly consumptionModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}
  */
  readonly idcsOpenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}
  */
  readonly isVisualBuilderEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}
  */
  readonly nodeCount: number;
  /**
  * alternate_custom_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#alternate_custom_endpoints VisualBuilderVbInstance#alternate_custom_endpoints}
  */
  readonly alternateCustomEndpoints?: VisualBuilderVbInstanceAlternateCustomEndpoints[] | cdktf.IResolvable;
  /**
  * custom_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#custom_endpoint VisualBuilderVbInstance#custom_endpoint}
  */
  readonly customEndpoint?: VisualBuilderVbInstanceCustomEndpoint;
  /**
  * network_endpoint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#network_endpoint_details VisualBuilderVbInstance#network_endpoint_details}
  */
  readonly networkEndpointDetails?: VisualBuilderVbInstanceNetworkEndpointDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#timeouts VisualBuilderVbInstance#timeouts}
  */
  readonly timeouts?: VisualBuilderVbInstanceTimeouts;
}
export interface VisualBuilderVbInstanceAlternateCustomEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}
  */
  readonly certificateSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}
  */
  readonly hostname: string;
}

export function visualBuilderVbInstanceAlternateCustomEndpointsToTerraform(struct?: VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_secret_id: cdktf.stringToTerraform(struct!.certificateSecretId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function visualBuilderVbInstanceAlternateCustomEndpointsToHclTerraform(struct?: VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretId = this._certificateSecretId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceAlternateCustomEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSecretId = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSecretId = value.certificateSecretId;
      this._hostname = value.hostname;
    }
  }

  // certificate_secret_id - computed: true, optional: true, required: false
  private _certificateSecretId?: string; 
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }
  public set certificateSecretId(value: string) {
    this._certificateSecretId = value;
  }
  public resetCertificateSecretId() {
    this._certificateSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretIdInput() {
    return this._certificateSecretId;
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class VisualBuilderVbInstanceAlternateCustomEndpointsList extends cdktf.ComplexList {
  public internalValue? : VisualBuilderVbInstanceAlternateCustomEndpoints[] | cdktf.IResolvable

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
  public get(index: number): VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference {
    return new VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualBuilderVbInstanceCustomEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}
  */
  readonly certificateSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}
  */
  readonly hostname: string;
}

export function visualBuilderVbInstanceCustomEndpointToTerraform(struct?: VisualBuilderVbInstanceCustomEndpointOutputReference | VisualBuilderVbInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_secret_id: cdktf.stringToTerraform(struct!.certificateSecretId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function visualBuilderVbInstanceCustomEndpointToHclTerraform(struct?: VisualBuilderVbInstanceCustomEndpointOutputReference | VisualBuilderVbInstanceCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VisualBuilderVbInstanceCustomEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisualBuilderVbInstanceCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSecretId = this._certificateSecretId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateSecretId = undefined;
      this._hostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateSecretId = value.certificateSecretId;
      this._hostname = value.hostname;
    }
  }

  // certificate_secret_id - computed: true, optional: true, required: false
  private _certificateSecretId?: string; 
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }
  public set certificateSecretId(value: string) {
    this._certificateSecretId = value;
  }
  public resetCertificateSecretId() {
    this._certificateSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSecretIdInput() {
    return this._certificateSecretId;
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}
export interface VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#allowlisted_ip_cidrs VisualBuilderVbInstance#allowlisted_ip_cidrs}
  */
  readonly allowlistedIpCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function visualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToTerraform(struct?: VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_ip_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedIpCidrs),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function visualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToHclTerraform(struct?: VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_ip_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedIpCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedIpCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedIpCidrs = this._allowlistedIpCidrs;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowlistedIpCidrs = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowlistedIpCidrs = value.allowlistedIpCidrs;
      this._id = value.id;
    }
  }

  // allowlisted_ip_cidrs - computed: true, optional: true, required: false
  private _allowlistedIpCidrs?: string[]; 
  public get allowlistedIpCidrs() {
    return this.getListAttribute('allowlisted_ip_cidrs');
  }
  public set allowlistedIpCidrs(value: string[]) {
    this._allowlistedIpCidrs = value;
  }
  public resetAllowlistedIpCidrs() {
    this._allowlistedIpCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedIpCidrsInput() {
    return this._allowlistedIpCidrs;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList extends cdktf.ComplexList {
  public internalValue? : VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns[] | cdktf.IResolvable

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
  public get(index: number): VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference {
    return new VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisualBuilderVbInstanceNetworkEndpointDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#allowlisted_http_ips VisualBuilderVbInstance#allowlisted_http_ips}
  */
  readonly allowlistedHttpIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#network_endpoint_type VisualBuilderVbInstance#network_endpoint_type}
  */
  readonly networkEndpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#network_security_group_ids VisualBuilderVbInstance#network_security_group_ids}
  */
  readonly networkSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#private_endpoint_ip VisualBuilderVbInstance#private_endpoint_ip}
  */
  readonly privateEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#subnet_id VisualBuilderVbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * allowlisted_http_vcns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#allowlisted_http_vcns VisualBuilderVbInstance#allowlisted_http_vcns}
  */
  readonly allowlistedHttpVcns?: VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns[] | cdktf.IResolvable;
}

export function visualBuilderVbInstanceNetworkEndpointDetailsToTerraform(struct?: VisualBuilderVbInstanceNetworkEndpointDetailsOutputReference | VisualBuilderVbInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlisted_http_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlistedHttpIps),
    network_endpoint_type: cdktf.stringToTerraform(struct!.networkEndpointType),
    network_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkSecurityGroupIds),
    private_endpoint_ip: cdktf.stringToTerraform(struct!.privateEndpointIp),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    allowlisted_http_vcns: cdktf.listMapper(visualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToTerraform, true)(struct!.allowlistedHttpVcns),
  }
}


export function visualBuilderVbInstanceNetworkEndpointDetailsToHclTerraform(struct?: VisualBuilderVbInstanceNetworkEndpointDetailsOutputReference | VisualBuilderVbInstanceNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlisted_http_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlistedHttpIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.networkEndpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_endpoint_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowlisted_http_vcns: {
      value: cdktf.listMapperHcl(visualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsToHclTerraform, true)(struct!.allowlistedHttpVcns),
      isBlock: true,
      type: "list",
      storageClassType: "VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualBuilderVbInstanceNetworkEndpointDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisualBuilderVbInstanceNetworkEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlistedHttpIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpIps = this._allowlistedHttpIps;
    }
    if (this._networkEndpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkEndpointType = this._networkEndpointType;
    }
    if (this._networkSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroupIds = this._networkSecurityGroupIds;
    }
    if (this._privateEndpointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointIp = this._privateEndpointIp;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._allowlistedHttpVcns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistedHttpVcns = this._allowlistedHttpVcns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceNetworkEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlistedHttpIps = undefined;
      this._networkEndpointType = undefined;
      this._networkSecurityGroupIds = undefined;
      this._privateEndpointIp = undefined;
      this._subnetId = undefined;
      this._allowlistedHttpVcns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlistedHttpIps = value.allowlistedHttpIps;
      this._networkEndpointType = value.networkEndpointType;
      this._networkSecurityGroupIds = value.networkSecurityGroupIds;
      this._privateEndpointIp = value.privateEndpointIp;
      this._subnetId = value.subnetId;
      this._allowlistedHttpVcns.internalValue = value.allowlistedHttpVcns;
    }
  }

  // allowlisted_http_ips - computed: true, optional: true, required: false
  private _allowlistedHttpIps?: string[]; 
  public get allowlistedHttpIps() {
    return this.getListAttribute('allowlisted_http_ips');
  }
  public set allowlistedHttpIps(value: string[]) {
    this._allowlistedHttpIps = value;
  }
  public resetAllowlistedHttpIps() {
    this._allowlistedHttpIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpIpsInput() {
    return this._allowlistedHttpIps;
  }

  // network_endpoint_type - computed: false, optional: false, required: true
  private _networkEndpointType?: string; 
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }
  public set networkEndpointType(value: string) {
    this._networkEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointTypeInput() {
    return this._networkEndpointType;
  }

  // network_security_group_ids - computed: true, optional: true, required: false
  private _networkSecurityGroupIds?: string[]; 
  public get networkSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_security_group_ids'));
  }
  public set networkSecurityGroupIds(value: string[]) {
    this._networkSecurityGroupIds = value;
  }
  public resetNetworkSecurityGroupIds() {
    this._networkSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdsInput() {
    return this._networkSecurityGroupIds;
  }

  // private_endpoint_ip - computed: true, optional: true, required: false
  private _privateEndpointIp?: string; 
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }
  public set privateEndpointIp(value: string) {
    this._privateEndpointIp = value;
  }
  public resetPrivateEndpointIp() {
    this._privateEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIpInput() {
    return this._privateEndpointIp;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // allowlisted_http_vcns - computed: false, optional: true, required: false
  private _allowlistedHttpVcns = new VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList(this, "allowlisted_http_vcns", false);
  public get allowlistedHttpVcns() {
    return this._allowlistedHttpVcns;
  }
  public putAllowlistedHttpVcns(value: VisualBuilderVbInstanceNetworkEndpointDetailsAllowlistedHttpVcns[] | cdktf.IResolvable) {
    this._allowlistedHttpVcns.internalValue = value;
  }
  public resetAllowlistedHttpVcns() {
    this._allowlistedHttpVcns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedHttpVcnsInput() {
    return this._allowlistedHttpVcns.internalValue;
  }
}
export interface VisualBuilderVbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#create VisualBuilderVbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#delete VisualBuilderVbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#update VisualBuilderVbInstance#update}
  */
  readonly update?: string;
}

export function visualBuilderVbInstanceTimeoutsToTerraform(struct?: VisualBuilderVbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function visualBuilderVbInstanceTimeoutsToHclTerraform(struct?: VisualBuilderVbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisualBuilderVbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VisualBuilderVbInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisualBuilderVbInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance oci_visual_builder_vb_instance}
*/
export class VisualBuilderVbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_visual_builder_vb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisualBuilderVbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisualBuilderVbInstance to import
  * @param importFromId The id of the existing VisualBuilderVbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisualBuilderVbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_visual_builder_vb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/visual_builder_vb_instance oci_visual_builder_vb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisualBuilderVbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: VisualBuilderVbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_visual_builder_vb_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._consumptionModel = config.consumptionModel;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idcsOpenId = config.idcsOpenId;
    this._isVisualBuilderEnabled = config.isVisualBuilderEnabled;
    this._nodeCount = config.nodeCount;
    this._alternateCustomEndpoints.internalValue = config.alternateCustomEndpoints;
    this._customEndpoint.internalValue = config.customEndpoint;
    this._networkEndpointDetails.internalValue = config.networkEndpointDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // consumption_model - computed: true, optional: true, required: false
  private _consumptionModel?: string; 
  public get consumptionModel() {
    return this.getStringAttribute('consumption_model');
  }
  public set consumptionModel(value: string) {
    this._consumptionModel = value;
  }
  public resetConsumptionModel() {
    this._consumptionModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionModelInput() {
    return this._consumptionModel;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // idcs_open_id - computed: false, optional: true, required: false
  private _idcsOpenId?: string; 
  public get idcsOpenId() {
    return this.getStringAttribute('idcs_open_id');
  }
  public set idcsOpenId(value: string) {
    this._idcsOpenId = value;
  }
  public resetIdcsOpenId() {
    this._idcsOpenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsOpenIdInput() {
    return this._idcsOpenId;
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_visual_builder_enabled - computed: true, optional: true, required: false
  private _isVisualBuilderEnabled?: boolean | cdktf.IResolvable; 
  public get isVisualBuilderEnabled() {
    return this.getBooleanAttribute('is_visual_builder_enabled');
  }
  public set isVisualBuilderEnabled(value: boolean | cdktf.IResolvable) {
    this._isVisualBuilderEnabled = value;
  }
  public resetIsVisualBuilderEnabled() {
    this._isVisualBuilderEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisualBuilderEnabledInput() {
    return this._isVisualBuilderEnabled;
  }

  // management_nat_gateway_ip - computed: true, optional: false, required: false
  public get managementNatGatewayIp() {
    return this.getStringAttribute('management_nat_gateway_ip');
  }

  // management_vcn_id - computed: true, optional: false, required: false
  public get managementVcnId() {
    return this.getStringAttribute('management_vcn_id');
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // service_nat_gateway_ip - computed: true, optional: false, required: false
  public get serviceNatGatewayIp() {
    return this.getStringAttribute('service_nat_gateway_ip');
  }

  // service_vcn_id - computed: true, optional: false, required: false
  public get serviceVcnId() {
    return this.getStringAttribute('service_vcn_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // alternate_custom_endpoints - computed: false, optional: true, required: false
  private _alternateCustomEndpoints = new VisualBuilderVbInstanceAlternateCustomEndpointsList(this, "alternate_custom_endpoints", false);
  public get alternateCustomEndpoints() {
    return this._alternateCustomEndpoints;
  }
  public putAlternateCustomEndpoints(value: VisualBuilderVbInstanceAlternateCustomEndpoints[] | cdktf.IResolvable) {
    this._alternateCustomEndpoints.internalValue = value;
  }
  public resetAlternateCustomEndpoints() {
    this._alternateCustomEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateCustomEndpointsInput() {
    return this._alternateCustomEndpoints.internalValue;
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint = new VisualBuilderVbInstanceCustomEndpointOutputReference(this, "custom_endpoint");
  public get customEndpoint() {
    return this._customEndpoint;
  }
  public putCustomEndpoint(value: VisualBuilderVbInstanceCustomEndpoint) {
    this._customEndpoint.internalValue = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint.internalValue;
  }

  // network_endpoint_details - computed: false, optional: true, required: false
  private _networkEndpointDetails = new VisualBuilderVbInstanceNetworkEndpointDetailsOutputReference(this, "network_endpoint_details");
  public get networkEndpointDetails() {
    return this._networkEndpointDetails;
  }
  public putNetworkEndpointDetails(value: VisualBuilderVbInstanceNetworkEndpointDetails) {
    this._networkEndpointDetails.internalValue = value;
  }
  public resetNetworkEndpointDetails() {
    this._networkEndpointDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointDetailsInput() {
    return this._networkEndpointDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VisualBuilderVbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VisualBuilderVbInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      consumption_model: cdktf.stringToTerraform(this._consumptionModel),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idcs_open_id: cdktf.stringToTerraform(this._idcsOpenId),
      is_visual_builder_enabled: cdktf.booleanToTerraform(this._isVisualBuilderEnabled),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      alternate_custom_endpoints: cdktf.listMapper(visualBuilderVbInstanceAlternateCustomEndpointsToTerraform, true)(this._alternateCustomEndpoints.internalValue),
      custom_endpoint: visualBuilderVbInstanceCustomEndpointToTerraform(this._customEndpoint.internalValue),
      network_endpoint_details: visualBuilderVbInstanceNetworkEndpointDetailsToTerraform(this._networkEndpointDetails.internalValue),
      timeouts: visualBuilderVbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumption_model: {
        value: cdktf.stringToHclTerraform(this._consumptionModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_open_id: {
        value: cdktf.stringToHclTerraform(this._idcsOpenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_visual_builder_enabled: {
        value: cdktf.booleanToHclTerraform(this._isVisualBuilderEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alternate_custom_endpoints: {
        value: cdktf.listMapperHcl(visualBuilderVbInstanceAlternateCustomEndpointsToHclTerraform, true)(this._alternateCustomEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisualBuilderVbInstanceAlternateCustomEndpointsList",
      },
      custom_endpoint: {
        value: visualBuilderVbInstanceCustomEndpointToHclTerraform(this._customEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisualBuilderVbInstanceCustomEndpointList",
      },
      network_endpoint_details: {
        value: visualBuilderVbInstanceNetworkEndpointDetailsToHclTerraform(this._networkEndpointDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisualBuilderVbInstanceNetworkEndpointDetailsList",
      },
      timeouts: {
        value: visualBuilderVbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VisualBuilderVbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

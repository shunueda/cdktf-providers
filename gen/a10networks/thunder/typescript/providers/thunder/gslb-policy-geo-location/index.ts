// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyGeoLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#id GslbPolicyGeoLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify geo-location name, section range is (1-15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#name GslbPolicyGeoLocation#name}
  */
  readonly name: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#policy_name GslbPolicyGeoLocation#policy_name}
  */
  readonly policyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#user_tag GslbPolicyGeoLocation#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#uuid GslbPolicyGeoLocation#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_multiple_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ip_multiple_fields GslbPolicyGeoLocation#ip_multiple_fields}
  */
  readonly ipMultipleFields?: GslbPolicyGeoLocationIpMultipleFields[] | cdktf.IResolvable;
  /**
  * ipv6_multiple_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ipv6_multiple_fields GslbPolicyGeoLocation#ipv6_multiple_fields}
  */
  readonly ipv6MultipleFields?: GslbPolicyGeoLocationIpv6MultipleFields[] | cdktf.IResolvable;
}
export interface GslbPolicyGeoLocationIpMultipleFields {
  /**
  * Specify IP address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ip_addr2_sub GslbPolicyGeoLocation#ip_addr2_sub}
  */
  readonly ipAddr2Sub?: string;
  /**
  * Specify IP/mask format (Specify IP address mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ip_mask_sub GslbPolicyGeoLocation#ip_mask_sub}
  */
  readonly ipMaskSub?: string;
  /**
  * Specify IP information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ip_sub GslbPolicyGeoLocation#ip_sub}
  */
  readonly ipSub?: string;
}

export function gslbPolicyGeoLocationIpMultipleFieldsToTerraform(struct?: GslbPolicyGeoLocationIpMultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr2_sub: cdktf.stringToTerraform(struct!.ipAddr2Sub),
    ip_mask_sub: cdktf.stringToTerraform(struct!.ipMaskSub),
    ip_sub: cdktf.stringToTerraform(struct!.ipSub),
  }
}


export function gslbPolicyGeoLocationIpMultipleFieldsToHclTerraform(struct?: GslbPolicyGeoLocationIpMultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr2_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr2Sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipMaskSub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipSub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyGeoLocationIpMultipleFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyGeoLocationIpMultipleFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr2Sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr2Sub = this._ipAddr2Sub;
    }
    if (this._ipMaskSub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMaskSub = this._ipMaskSub;
    }
    if (this._ipSub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSub = this._ipSub;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyGeoLocationIpMultipleFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr2Sub = undefined;
      this._ipMaskSub = undefined;
      this._ipSub = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr2Sub = value.ipAddr2Sub;
      this._ipMaskSub = value.ipMaskSub;
      this._ipSub = value.ipSub;
    }
  }

  // ip_addr2_sub - computed: false, optional: true, required: false
  private _ipAddr2Sub?: string; 
  public get ipAddr2Sub() {
    return this.getStringAttribute('ip_addr2_sub');
  }
  public set ipAddr2Sub(value: string) {
    this._ipAddr2Sub = value;
  }
  public resetIpAddr2Sub() {
    this._ipAddr2Sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddr2SubInput() {
    return this._ipAddr2Sub;
  }

  // ip_mask_sub - computed: false, optional: true, required: false
  private _ipMaskSub?: string; 
  public get ipMaskSub() {
    return this.getStringAttribute('ip_mask_sub');
  }
  public set ipMaskSub(value: string) {
    this._ipMaskSub = value;
  }
  public resetIpMaskSub() {
    this._ipMaskSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskSubInput() {
    return this._ipMaskSub;
  }

  // ip_sub - computed: false, optional: true, required: false
  private _ipSub?: string; 
  public get ipSub() {
    return this.getStringAttribute('ip_sub');
  }
  public set ipSub(value: string) {
    this._ipSub = value;
  }
  public resetIpSub() {
    this._ipSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubInput() {
    return this._ipSub;
  }
}

export class GslbPolicyGeoLocationIpMultipleFieldsList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyGeoLocationIpMultipleFields[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyGeoLocationIpMultipleFieldsOutputReference {
    return new GslbPolicyGeoLocationIpMultipleFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyGeoLocationIpv6MultipleFields {
  /**
  * Specify IPv6 address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ipv6_addr2_sub GslbPolicyGeoLocation#ipv6_addr2_sub}
  */
  readonly ipv6Addr2Sub?: string;
  /**
  * Specify IPv6/mask format (Specify IP address mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ipv6_mask_sub GslbPolicyGeoLocation#ipv6_mask_sub}
  */
  readonly ipv6MaskSub?: number;
  /**
  * Specify IPv6 information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#ipv6_sub GslbPolicyGeoLocation#ipv6_sub}
  */
  readonly ipv6Sub?: string;
}

export function gslbPolicyGeoLocationIpv6MultipleFieldsToTerraform(struct?: GslbPolicyGeoLocationIpv6MultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_addr2_sub: cdktf.stringToTerraform(struct!.ipv6Addr2Sub),
    ipv6_mask_sub: cdktf.numberToTerraform(struct!.ipv6MaskSub),
    ipv6_sub: cdktf.stringToTerraform(struct!.ipv6Sub),
  }
}


export function gslbPolicyGeoLocationIpv6MultipleFieldsToHclTerraform(struct?: GslbPolicyGeoLocationIpv6MultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_addr2_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr2Sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask_sub: {
      value: cdktf.numberToHclTerraform(struct!.ipv6MaskSub),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyGeoLocationIpv6MultipleFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyGeoLocationIpv6MultipleFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Addr2Sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr2Sub = this._ipv6Addr2Sub;
    }
    if (this._ipv6MaskSub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MaskSub = this._ipv6MaskSub;
    }
    if (this._ipv6Sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Sub = this._ipv6Sub;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyGeoLocationIpv6MultipleFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Addr2Sub = undefined;
      this._ipv6MaskSub = undefined;
      this._ipv6Sub = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Addr2Sub = value.ipv6Addr2Sub;
      this._ipv6MaskSub = value.ipv6MaskSub;
      this._ipv6Sub = value.ipv6Sub;
    }
  }

  // ipv6_addr2_sub - computed: false, optional: true, required: false
  private _ipv6Addr2Sub?: string; 
  public get ipv6Addr2Sub() {
    return this.getStringAttribute('ipv6_addr2_sub');
  }
  public set ipv6Addr2Sub(value: string) {
    this._ipv6Addr2Sub = value;
  }
  public resetIpv6Addr2Sub() {
    this._ipv6Addr2Sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Addr2SubInput() {
    return this._ipv6Addr2Sub;
  }

  // ipv6_mask_sub - computed: false, optional: true, required: false
  private _ipv6MaskSub?: number; 
  public get ipv6MaskSub() {
    return this.getNumberAttribute('ipv6_mask_sub');
  }
  public set ipv6MaskSub(value: number) {
    this._ipv6MaskSub = value;
  }
  public resetIpv6MaskSub() {
    this._ipv6MaskSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskSubInput() {
    return this._ipv6MaskSub;
  }

  // ipv6_sub - computed: false, optional: true, required: false
  private _ipv6Sub?: string; 
  public get ipv6Sub() {
    return this.getStringAttribute('ipv6_sub');
  }
  public set ipv6Sub(value: string) {
    this._ipv6Sub = value;
  }
  public resetIpv6Sub() {
    this._ipv6Sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubInput() {
    return this._ipv6Sub;
  }
}

export class GslbPolicyGeoLocationIpv6MultipleFieldsList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyGeoLocationIpv6MultipleFields[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyGeoLocationIpv6MultipleFieldsOutputReference {
    return new GslbPolicyGeoLocationIpv6MultipleFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location thunder_gslb_policy_geo_location}
*/
export class GslbPolicyGeoLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_geo_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyGeoLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyGeoLocation to import
  * @param importFromId The id of the existing GslbPolicyGeoLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyGeoLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_geo_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_geo_location thunder_gslb_policy_geo_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyGeoLocationConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyGeoLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_geo_location',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._policyName = config.policyName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ipMultipleFields.internalValue = config.ipMultipleFields;
    this._ipv6MultipleFields.internalValue = config.ipv6MultipleFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ip_multiple_fields - computed: false, optional: true, required: false
  private _ipMultipleFields = new GslbPolicyGeoLocationIpMultipleFieldsList(this, "ip_multiple_fields", false);
  public get ipMultipleFields() {
    return this._ipMultipleFields;
  }
  public putIpMultipleFields(value: GslbPolicyGeoLocationIpMultipleFields[] | cdktf.IResolvable) {
    this._ipMultipleFields.internalValue = value;
  }
  public resetIpMultipleFields() {
    this._ipMultipleFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMultipleFieldsInput() {
    return this._ipMultipleFields.internalValue;
  }

  // ipv6_multiple_fields - computed: false, optional: true, required: false
  private _ipv6MultipleFields = new GslbPolicyGeoLocationIpv6MultipleFieldsList(this, "ipv6_multiple_fields", false);
  public get ipv6MultipleFields() {
    return this._ipv6MultipleFields;
  }
  public putIpv6MultipleFields(value: GslbPolicyGeoLocationIpv6MultipleFields[] | cdktf.IResolvable) {
    this._ipv6MultipleFields.internalValue = value;
  }
  public resetIpv6MultipleFields() {
    this._ipv6MultipleFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MultipleFieldsInput() {
    return this._ipv6MultipleFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_name: cdktf.stringToTerraform(this._policyName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_multiple_fields: cdktf.listMapper(gslbPolicyGeoLocationIpMultipleFieldsToTerraform, true)(this._ipMultipleFields.internalValue),
      ipv6_multiple_fields: cdktf.listMapper(gslbPolicyGeoLocationIpv6MultipleFieldsToTerraform, true)(this._ipv6MultipleFields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_multiple_fields: {
        value: cdktf.listMapperHcl(gslbPolicyGeoLocationIpMultipleFieldsToHclTerraform, true)(this._ipMultipleFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyGeoLocationIpMultipleFieldsList",
      },
      ipv6_multiple_fields: {
        value: cdktf.listMapperHcl(gslbPolicyGeoLocationIpv6MultipleFieldsToHclTerraform, true)(this._ipv6MultipleFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyGeoLocationIpv6MultipleFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

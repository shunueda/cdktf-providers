// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureDeviceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the device template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#description FeatureDeviceTemplate#description}
  */
  readonly description: string;
  /**
  * The device role
  *   - Choices: `sdwan-edge`, `service-node`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#device_role FeatureDeviceTemplate#device_role}
  */
  readonly deviceRole?: string;
  /**
  * The device type (e.g., `vedge-ISR-4331`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#device_type FeatureDeviceTemplate#device_type}
  */
  readonly deviceType: string;
  /**
  * List of general templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#general_templates FeatureDeviceTemplate#general_templates}
  */
  readonly generalTemplates?: FeatureDeviceTemplateGeneralTemplates[] | cdktf.IResolvable;
  /**
  * The name of the device template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#name FeatureDeviceTemplate#name}
  */
  readonly name: string;
  /**
  * The policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#policy_id FeatureDeviceTemplate#policy_id}
  */
  readonly policyId?: string;
  /**
  * The policy version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#policy_version FeatureDeviceTemplate#policy_version}
  */
  readonly policyVersion?: number;
  /**
  * The security policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#security_policy_id FeatureDeviceTemplate#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * The security policy version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#security_policy_version FeatureDeviceTemplate#security_policy_version}
  */
  readonly securityPolicyVersion?: number;
}
export interface FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates {
  /**
  * Feature template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#id FeatureDeviceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Feature template type
  *   - Choices: `cisco_dhcp_server`, `cellular-cedge-profile`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#type FeatureDeviceTemplate#type}
  */
  readonly type: string;
  /**
  * Feature template version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#version FeatureDeviceTemplate#version}
  */
  readonly version?: number;
}

export function featureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesToTerraform(struct?: FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function featureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesToHclTerraform(struct?: FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesList extends cdktf.ComplexList {
  public internalValue? : FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates[] | cdktf.IResolvable

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
  public get(index: number): FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesOutputReference {
    return new FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureDeviceTemplateGeneralTemplatesSubTemplates {
  /**
  * Feature template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#id FeatureDeviceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * List of sub templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#sub_templates FeatureDeviceTemplate#sub_templates}
  */
  readonly subTemplates?: FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates[] | cdktf.IResolvable;
  /**
  * Feature template type
  *   - Choices: `cisco_logging`, `cisco_ntp`, `cisco_ospf`, `cisco_bgp`, `cisco_vpn_interface`, `cisco_vpn_interface_gre`, `cisco_vpn_interface_ipsec`, `vpn-interface-svi`, `vpn-cedge-interface-cellular`, `cisco_secure_internet_gateway`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#type FeatureDeviceTemplate#type}
  */
  readonly type: string;
  /**
  * Feature template version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#version FeatureDeviceTemplate#version}
  */
  readonly version?: number;
}

export function featureDeviceTemplateGeneralTemplatesSubTemplatesToTerraform(struct?: FeatureDeviceTemplateGeneralTemplatesSubTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    sub_templates: cdktf.listMapper(featureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesToTerraform, false)(struct!.subTemplates),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function featureDeviceTemplateGeneralTemplatesSubTemplatesToHclTerraform(struct?: FeatureDeviceTemplateGeneralTemplatesSubTemplates | cdktf.IResolvable): any {
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
    sub_templates: {
      value: cdktf.listMapperHcl(featureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesToHclTerraform, false)(struct!.subTemplates),
      isBlock: true,
      type: "set",
      storageClassType: "FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureDeviceTemplateGeneralTemplatesSubTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureDeviceTemplateGeneralTemplatesSubTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._subTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTemplates = this._subTemplates?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureDeviceTemplateGeneralTemplatesSubTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._subTemplates.internalValue = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._subTemplates.internalValue = value.subTemplates;
      this._type = value.type;
      this._version = value.version;
    }
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

  // sub_templates - computed: false, optional: true, required: false
  private _subTemplates = new FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplatesList(this, "sub_templates", true);
  public get subTemplates() {
    return this._subTemplates;
  }
  public putSubTemplates(value: FeatureDeviceTemplateGeneralTemplatesSubTemplatesSubTemplates[] | cdktf.IResolvable) {
    this._subTemplates.internalValue = value;
  }
  public resetSubTemplates() {
    this._subTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTemplatesInput() {
    return this._subTemplates.internalValue;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class FeatureDeviceTemplateGeneralTemplatesSubTemplatesList extends cdktf.ComplexList {
  public internalValue? : FeatureDeviceTemplateGeneralTemplatesSubTemplates[] | cdktf.IResolvable

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
  public get(index: number): FeatureDeviceTemplateGeneralTemplatesSubTemplatesOutputReference {
    return new FeatureDeviceTemplateGeneralTemplatesSubTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureDeviceTemplateGeneralTemplates {
  /**
  * Feature template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#id FeatureDeviceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * List of sub templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#sub_templates FeatureDeviceTemplate#sub_templates}
  */
  readonly subTemplates?: FeatureDeviceTemplateGeneralTemplatesSubTemplates[] | cdktf.IResolvable;
  /**
  * Feature template type
  *   - Choices: `cisco_system`, `cisco_logging`, `cedge_aaa`, `cisco_bfd`, `cisco_omp`, `cisco_security`, `cisco_banner`, `cisco_snmp`, `cedge_global`, `cli-template`, `cisco_sig_credentials`, `switchport`, `cisco_thousandeyes`, `cisco_vpn`, `virtual-application-utd`, `cellular-cedge-controller`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#type FeatureDeviceTemplate#type}
  */
  readonly type: string;
  /**
  * Feature template version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#version FeatureDeviceTemplate#version}
  */
  readonly version?: number;
}

export function featureDeviceTemplateGeneralTemplatesToTerraform(struct?: FeatureDeviceTemplateGeneralTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    sub_templates: cdktf.listMapper(featureDeviceTemplateGeneralTemplatesSubTemplatesToTerraform, false)(struct!.subTemplates),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function featureDeviceTemplateGeneralTemplatesToHclTerraform(struct?: FeatureDeviceTemplateGeneralTemplates | cdktf.IResolvable): any {
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
    sub_templates: {
      value: cdktf.listMapperHcl(featureDeviceTemplateGeneralTemplatesSubTemplatesToHclTerraform, false)(struct!.subTemplates),
      isBlock: true,
      type: "set",
      storageClassType: "FeatureDeviceTemplateGeneralTemplatesSubTemplatesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureDeviceTemplateGeneralTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FeatureDeviceTemplateGeneralTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._subTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTemplates = this._subTemplates?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureDeviceTemplateGeneralTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._subTemplates.internalValue = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._subTemplates.internalValue = value.subTemplates;
      this._type = value.type;
      this._version = value.version;
    }
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

  // sub_templates - computed: false, optional: true, required: false
  private _subTemplates = new FeatureDeviceTemplateGeneralTemplatesSubTemplatesList(this, "sub_templates", true);
  public get subTemplates() {
    return this._subTemplates;
  }
  public putSubTemplates(value: FeatureDeviceTemplateGeneralTemplatesSubTemplates[] | cdktf.IResolvable) {
    this._subTemplates.internalValue = value;
  }
  public resetSubTemplates() {
    this._subTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTemplatesInput() {
    return this._subTemplates.internalValue;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class FeatureDeviceTemplateGeneralTemplatesList extends cdktf.ComplexList {
  public internalValue? : FeatureDeviceTemplateGeneralTemplates[] | cdktf.IResolvable

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
  public get(index: number): FeatureDeviceTemplateGeneralTemplatesOutputReference {
    return new FeatureDeviceTemplateGeneralTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template sdwan_feature_device_template}
*/
export class FeatureDeviceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_feature_device_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureDeviceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureDeviceTemplate to import
  * @param importFromId The id of the existing FeatureDeviceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureDeviceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_feature_device_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/feature_device_template sdwan_feature_device_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureDeviceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureDeviceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_feature_device_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
    this._deviceRole = config.deviceRole;
    this._deviceType = config.deviceType;
    this._generalTemplates.internalValue = config.generalTemplates;
    this._name = config.name;
    this._policyId = config.policyId;
    this._policyVersion = config.policyVersion;
    this._securityPolicyId = config.securityPolicyId;
    this._securityPolicyVersion = config.securityPolicyVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_role - computed: false, optional: true, required: false
  private _deviceRole?: string; 
  public get deviceRole() {
    return this.getStringAttribute('device_role');
  }
  public set deviceRole(value: string) {
    this._deviceRole = value;
  }
  public resetDeviceRole() {
    this._deviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRoleInput() {
    return this._deviceRole;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // general_templates - computed: false, optional: true, required: false
  private _generalTemplates = new FeatureDeviceTemplateGeneralTemplatesList(this, "general_templates", true);
  public get generalTemplates() {
    return this._generalTemplates;
  }
  public putGeneralTemplates(value: FeatureDeviceTemplateGeneralTemplates[] | cdktf.IResolvable) {
    this._generalTemplates.internalValue = value;
  }
  public resetGeneralTemplates() {
    this._generalTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalTemplatesInput() {
    return this._generalTemplates.internalValue;
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

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_version - computed: false, optional: true, required: false
  private _policyVersion?: number; 
  public get policyVersion() {
    return this.getNumberAttribute('policy_version');
  }
  public set policyVersion(value: number) {
    this._policyVersion = value;
  }
  public resetPolicyVersion() {
    this._policyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyVersionInput() {
    return this._policyVersion;
  }

  // security_policy_id - computed: false, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // security_policy_version - computed: false, optional: true, required: false
  private _securityPolicyVersion?: number; 
  public get securityPolicyVersion() {
    return this.getNumberAttribute('security_policy_version');
  }
  public set securityPolicyVersion(value: number) {
    this._securityPolicyVersion = value;
  }
  public resetSecurityPolicyVersion() {
    this._securityPolicyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyVersionInput() {
    return this._securityPolicyVersion;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_role: cdktf.stringToTerraform(this._deviceRole),
      device_type: cdktf.stringToTerraform(this._deviceType),
      general_templates: cdktf.listMapper(featureDeviceTemplateGeneralTemplatesToTerraform, false)(this._generalTemplates.internalValue),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policy_version: cdktf.numberToTerraform(this._policyVersion),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      security_policy_version: cdktf.numberToTerraform(this._securityPolicyVersion),
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
      device_role: {
        value: cdktf.stringToHclTerraform(this._deviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      general_templates: {
        value: cdktf.listMapperHcl(featureDeviceTemplateGeneralTemplatesToHclTerraform, false)(this._generalTemplates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FeatureDeviceTemplateGeneralTemplatesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_version: {
        value: cdktf.numberToHclTerraform(this._policyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_version: {
        value: cdktf.numberToHclTerraform(this._securityPolicyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

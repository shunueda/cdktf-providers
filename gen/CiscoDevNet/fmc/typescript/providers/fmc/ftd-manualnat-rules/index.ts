// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtdManualnatRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#description FtdManualnatRules#description}
  */
  readonly description?: string;
  /**
  * Enable this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#enabled FtdManualnatRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable fallthrough
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#fallthrough FtdManualnatRules#fallthrough}
  */
  readonly fallthrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface is the original destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#interface_in_original_destination FtdManualnatRules#interface_in_original_destination}
  */
  readonly interfaceInOriginalDestination?: boolean | cdktf.IResolvable;
  /**
  * Interface is the translated source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#interface_in_translated_source FtdManualnatRules#interface_in_translated_source}
  */
  readonly interfaceInTranslatedSource?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#ipv6 FtdManualnatRules#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The ID of the NAT policy this resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#nat_policy FtdManualnatRules#nat_policy}
  */
  readonly natPolicy: string;
  /**
  * The type of this resource, "static" or "dynamic"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#nat_type FtdManualnatRules#nat_type}
  */
  readonly natType: string;
  /**
  * Enable Net to Net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#net_to_net FtdManualnatRules#net_to_net}
  */
  readonly netToNet?: boolean | cdktf.IResolvable;
  /**
  * Disable proxy ARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#no_proxy_arp FtdManualnatRules#no_proxy_arp}
  */
  readonly noProxyArp?: boolean | cdktf.IResolvable;
  /**
  * Enable perform route lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#perform_route_lookup FtdManualnatRules#perform_route_lookup}
  */
  readonly performRouteLookup?: boolean | cdktf.IResolvable;
  /**
  * Section, "after_auto" or "before_auto"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#section FtdManualnatRules#section}
  */
  readonly section?: string;
  /**
  * Target index to place this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#target_index FtdManualnatRules#target_index}
  */
  readonly targetIndex?: string;
  /**
  * Enable translate DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#translate_dns FtdManualnatRules#translate_dns}
  */
  readonly translateDns?: boolean | cdktf.IResolvable;
  /**
  * Make this resource unidirectional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#unidirectional FtdManualnatRules#unidirectional}
  */
  readonly unidirectional?: boolean | cdktf.IResolvable;
  /**
  * destination_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#destination_interface FtdManualnatRules#destination_interface}
  */
  readonly destinationInterface?: FtdManualnatRulesDestinationInterface;
  /**
  * original_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#original_destination FtdManualnatRules#original_destination}
  */
  readonly originalDestination?: FtdManualnatRulesOriginalDestination;
  /**
  * original_destination_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#original_destination_port FtdManualnatRules#original_destination_port}
  */
  readonly originalDestinationPort?: FtdManualnatRulesOriginalDestinationPort;
  /**
  * original_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#original_source FtdManualnatRules#original_source}
  */
  readonly originalSource: FtdManualnatRulesOriginalSource;
  /**
  * original_source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#original_source_port FtdManualnatRules#original_source_port}
  */
  readonly originalSourcePort?: FtdManualnatRulesOriginalSourcePort;
  /**
  * pat_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#pat_options FtdManualnatRules#pat_options}
  */
  readonly patOptions?: FtdManualnatRulesPatOptions;
  /**
  * source_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#source_interface FtdManualnatRules#source_interface}
  */
  readonly sourceInterface?: FtdManualnatRulesSourceInterface;
  /**
  * translated_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#translated_destination FtdManualnatRules#translated_destination}
  */
  readonly translatedDestination?: FtdManualnatRulesTranslatedDestination;
  /**
  * translated_destination_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#translated_destination_port FtdManualnatRules#translated_destination_port}
  */
  readonly translatedDestinationPort?: FtdManualnatRulesTranslatedDestinationPort;
  /**
  * translated_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#translated_source FtdManualnatRules#translated_source}
  */
  readonly translatedSource?: FtdManualnatRulesTranslatedSource;
  /**
  * translated_source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#translated_source_port FtdManualnatRules#translated_source_port}
  */
  readonly translatedSourcePort?: FtdManualnatRulesTranslatedSourcePort;
}
export interface FtdManualnatRulesDestinationInterface {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesDestinationInterfaceToTerraform(struct?: FtdManualnatRulesDestinationInterfaceOutputReference | FtdManualnatRulesDestinationInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesDestinationInterfaceToHclTerraform(struct?: FtdManualnatRulesDestinationInterfaceOutputReference | FtdManualnatRulesDestinationInterface): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesDestinationInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesDestinationInterface | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesDestinationInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesOriginalDestination {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesOriginalDestinationToTerraform(struct?: FtdManualnatRulesOriginalDestinationOutputReference | FtdManualnatRulesOriginalDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesOriginalDestinationToHclTerraform(struct?: FtdManualnatRulesOriginalDestinationOutputReference | FtdManualnatRulesOriginalDestination): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesOriginalDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesOriginalDestination | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesOriginalDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesOriginalDestinationPort {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesOriginalDestinationPortToTerraform(struct?: FtdManualnatRulesOriginalDestinationPortOutputReference | FtdManualnatRulesOriginalDestinationPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesOriginalDestinationPortToHclTerraform(struct?: FtdManualnatRulesOriginalDestinationPortOutputReference | FtdManualnatRulesOriginalDestinationPort): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesOriginalDestinationPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesOriginalDestinationPort | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesOriginalDestinationPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesOriginalSource {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesOriginalSourceToTerraform(struct?: FtdManualnatRulesOriginalSourceOutputReference | FtdManualnatRulesOriginalSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesOriginalSourceToHclTerraform(struct?: FtdManualnatRulesOriginalSourceOutputReference | FtdManualnatRulesOriginalSource): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesOriginalSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesOriginalSource | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesOriginalSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesOriginalSourcePort {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesOriginalSourcePortToTerraform(struct?: FtdManualnatRulesOriginalSourcePortOutputReference | FtdManualnatRulesOriginalSourcePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesOriginalSourcePortToHclTerraform(struct?: FtdManualnatRulesOriginalSourcePortOutputReference | FtdManualnatRulesOriginalSourcePort): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesOriginalSourcePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesOriginalSourcePort | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesOriginalSourcePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesPatOptionsPatPoolAddress {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesPatOptionsPatPoolAddressToTerraform(struct?: FtdManualnatRulesPatOptionsPatPoolAddressOutputReference | FtdManualnatRulesPatOptionsPatPoolAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesPatOptionsPatPoolAddressToHclTerraform(struct?: FtdManualnatRulesPatOptionsPatPoolAddressOutputReference | FtdManualnatRulesPatOptionsPatPoolAddress): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesPatOptionsPatPoolAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesPatOptionsPatPoolAddress | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesPatOptionsPatPoolAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesPatOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#extended_pat_table FtdManualnatRules#extended_pat_table}
  */
  readonly extendedPatTable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#include_reserve_ports FtdManualnatRules#include_reserve_ports}
  */
  readonly includeReservePorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#interface_pat FtdManualnatRules#interface_pat}
  */
  readonly interfacePat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#round_robin FtdManualnatRules#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
  /**
  * pat_pool_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#pat_pool_address FtdManualnatRules#pat_pool_address}
  */
  readonly patPoolAddress?: FtdManualnatRulesPatOptionsPatPoolAddress;
}

export function ftdManualnatRulesPatOptionsToTerraform(struct?: FtdManualnatRulesPatOptionsOutputReference | FtdManualnatRulesPatOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_pat_table: cdktf.booleanToTerraform(struct!.extendedPatTable),
    include_reserve_ports: cdktf.booleanToTerraform(struct!.includeReservePorts),
    interface_pat: cdktf.booleanToTerraform(struct!.interfacePat),
    round_robin: cdktf.booleanToTerraform(struct!.roundRobin),
    pat_pool_address: ftdManualnatRulesPatOptionsPatPoolAddressToTerraform(struct!.patPoolAddress),
  }
}


export function ftdManualnatRulesPatOptionsToHclTerraform(struct?: FtdManualnatRulesPatOptionsOutputReference | FtdManualnatRulesPatOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_pat_table: {
      value: cdktf.booleanToHclTerraform(struct!.extendedPatTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_reserve_ports: {
      value: cdktf.booleanToHclTerraform(struct!.includeReservePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_pat: {
      value: cdktf.booleanToHclTerraform(struct!.interfacePat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    round_robin: {
      value: cdktf.booleanToHclTerraform(struct!.roundRobin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pat_pool_address: {
      value: ftdManualnatRulesPatOptionsPatPoolAddressToHclTerraform(struct!.patPoolAddress),
      isBlock: true,
      type: "list",
      storageClassType: "FtdManualnatRulesPatOptionsPatPoolAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesPatOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesPatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedPatTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedPatTable = this._extendedPatTable;
    }
    if (this._includeReservePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeReservePorts = this._includeReservePorts;
    }
    if (this._interfacePat !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacePat = this._interfacePat;
    }
    if (this._roundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobin = this._roundRobin;
    }
    if (this._patPoolAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patPoolAddress = this._patPoolAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesPatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendedPatTable = undefined;
      this._includeReservePorts = undefined;
      this._interfacePat = undefined;
      this._roundRobin = undefined;
      this._patPoolAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendedPatTable = value.extendedPatTable;
      this._includeReservePorts = value.includeReservePorts;
      this._interfacePat = value.interfacePat;
      this._roundRobin = value.roundRobin;
      this._patPoolAddress.internalValue = value.patPoolAddress;
    }
  }

  // extended_pat_table - computed: false, optional: true, required: false
  private _extendedPatTable?: boolean | cdktf.IResolvable; 
  public get extendedPatTable() {
    return this.getBooleanAttribute('extended_pat_table');
  }
  public set extendedPatTable(value: boolean | cdktf.IResolvable) {
    this._extendedPatTable = value;
  }
  public resetExtendedPatTable() {
    this._extendedPatTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedPatTableInput() {
    return this._extendedPatTable;
  }

  // include_reserve_ports - computed: false, optional: true, required: false
  private _includeReservePorts?: boolean | cdktf.IResolvable; 
  public get includeReservePorts() {
    return this.getBooleanAttribute('include_reserve_ports');
  }
  public set includeReservePorts(value: boolean | cdktf.IResolvable) {
    this._includeReservePorts = value;
  }
  public resetIncludeReservePorts() {
    this._includeReservePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReservePortsInput() {
    return this._includeReservePorts;
  }

  // interface_pat - computed: false, optional: true, required: false
  private _interfacePat?: boolean | cdktf.IResolvable; 
  public get interfacePat() {
    return this.getBooleanAttribute('interface_pat');
  }
  public set interfacePat(value: boolean | cdktf.IResolvable) {
    this._interfacePat = value;
  }
  public resetInterfacePat() {
    this._interfacePat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePatInput() {
    return this._interfacePat;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: boolean | cdktf.IResolvable; 
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }
  public set roundRobin(value: boolean | cdktf.IResolvable) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }

  // pat_pool_address - computed: false, optional: true, required: false
  private _patPoolAddress = new FtdManualnatRulesPatOptionsPatPoolAddressOutputReference(this, "pat_pool_address");
  public get patPoolAddress() {
    return this._patPoolAddress;
  }
  public putPatPoolAddress(value: FtdManualnatRulesPatOptionsPatPoolAddress) {
    this._patPoolAddress.internalValue = value;
  }
  public resetPatPoolAddress() {
    this._patPoolAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patPoolAddressInput() {
    return this._patPoolAddress.internalValue;
  }
}
export interface FtdManualnatRulesSourceInterface {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesSourceInterfaceToTerraform(struct?: FtdManualnatRulesSourceInterfaceOutputReference | FtdManualnatRulesSourceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesSourceInterfaceToHclTerraform(struct?: FtdManualnatRulesSourceInterfaceOutputReference | FtdManualnatRulesSourceInterface): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesSourceInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesSourceInterface | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesSourceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesTranslatedDestination {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesTranslatedDestinationToTerraform(struct?: FtdManualnatRulesTranslatedDestinationOutputReference | FtdManualnatRulesTranslatedDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesTranslatedDestinationToHclTerraform(struct?: FtdManualnatRulesTranslatedDestinationOutputReference | FtdManualnatRulesTranslatedDestination): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesTranslatedDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesTranslatedDestination | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesTranslatedDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesTranslatedDestinationPort {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesTranslatedDestinationPortToTerraform(struct?: FtdManualnatRulesTranslatedDestinationPortOutputReference | FtdManualnatRulesTranslatedDestinationPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesTranslatedDestinationPortToHclTerraform(struct?: FtdManualnatRulesTranslatedDestinationPortOutputReference | FtdManualnatRulesTranslatedDestinationPort): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesTranslatedDestinationPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesTranslatedDestinationPort | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesTranslatedDestinationPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesTranslatedSource {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesTranslatedSourceToTerraform(struct?: FtdManualnatRulesTranslatedSourceOutputReference | FtdManualnatRulesTranslatedSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesTranslatedSourceToHclTerraform(struct?: FtdManualnatRulesTranslatedSourceOutputReference | FtdManualnatRulesTranslatedSource): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesTranslatedSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesTranslatedSource | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesTranslatedSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}
export interface FtdManualnatRulesTranslatedSourcePort {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#id FtdManualnatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#type FtdManualnatRules#type}
  */
  readonly type: string;
}

export function ftdManualnatRulesTranslatedSourcePortToTerraform(struct?: FtdManualnatRulesTranslatedSourcePortOutputReference | FtdManualnatRulesTranslatedSourcePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdManualnatRulesTranslatedSourcePortToHclTerraform(struct?: FtdManualnatRulesTranslatedSourcePortOutputReference | FtdManualnatRulesTranslatedSourcePort): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdManualnatRulesTranslatedSourcePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdManualnatRulesTranslatedSourcePort | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdManualnatRulesTranslatedSourcePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules fmc_ftd_manualnat_rules}
*/
export class FtdManualnatRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_ftd_manualnat_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtdManualnatRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtdManualnatRules to import
  * @param importFromId The id of the existing FtdManualnatRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtdManualnatRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_ftd_manualnat_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_manualnat_rules fmc_ftd_manualnat_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtdManualnatRulesConfig
  */
  public constructor(scope: Construct, id: string, config: FtdManualnatRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_ftd_manualnat_rules',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
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
    this._enabled = config.enabled;
    this._fallthrough = config.fallthrough;
    this._id = config.id;
    this._interfaceInOriginalDestination = config.interfaceInOriginalDestination;
    this._interfaceInTranslatedSource = config.interfaceInTranslatedSource;
    this._ipv6 = config.ipv6;
    this._natPolicy = config.natPolicy;
    this._natType = config.natType;
    this._netToNet = config.netToNet;
    this._noProxyArp = config.noProxyArp;
    this._performRouteLookup = config.performRouteLookup;
    this._section = config.section;
    this._targetIndex = config.targetIndex;
    this._translateDns = config.translateDns;
    this._unidirectional = config.unidirectional;
    this._destinationInterface.internalValue = config.destinationInterface;
    this._originalDestination.internalValue = config.originalDestination;
    this._originalDestinationPort.internalValue = config.originalDestinationPort;
    this._originalSource.internalValue = config.originalSource;
    this._originalSourcePort.internalValue = config.originalSourcePort;
    this._patOptions.internalValue = config.patOptions;
    this._sourceInterface.internalValue = config.sourceInterface;
    this._translatedDestination.internalValue = config.translatedDestination;
    this._translatedDestinationPort.internalValue = config.translatedDestinationPort;
    this._translatedSource.internalValue = config.translatedSource;
    this._translatedSourcePort.internalValue = config.translatedSourcePort;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fallthrough - computed: false, optional: true, required: false
  private _fallthrough?: boolean | cdktf.IResolvable; 
  public get fallthrough() {
    return this.getBooleanAttribute('fallthrough');
  }
  public set fallthrough(value: boolean | cdktf.IResolvable) {
    this._fallthrough = value;
  }
  public resetFallthrough() {
    this._fallthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallthroughInput() {
    return this._fallthrough;
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

  // interface_in_original_destination - computed: false, optional: true, required: false
  private _interfaceInOriginalDestination?: boolean | cdktf.IResolvable; 
  public get interfaceInOriginalDestination() {
    return this.getBooleanAttribute('interface_in_original_destination');
  }
  public set interfaceInOriginalDestination(value: boolean | cdktf.IResolvable) {
    this._interfaceInOriginalDestination = value;
  }
  public resetInterfaceInOriginalDestination() {
    this._interfaceInOriginalDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInOriginalDestinationInput() {
    return this._interfaceInOriginalDestination;
  }

  // interface_in_translated_source - computed: false, optional: true, required: false
  private _interfaceInTranslatedSource?: boolean | cdktf.IResolvable; 
  public get interfaceInTranslatedSource() {
    return this.getBooleanAttribute('interface_in_translated_source');
  }
  public set interfaceInTranslatedSource(value: boolean | cdktf.IResolvable) {
    this._interfaceInTranslatedSource = value;
  }
  public resetInterfaceInTranslatedSource() {
    this._interfaceInTranslatedSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInTranslatedSourceInput() {
    return this._interfaceInTranslatedSource;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // nat_policy - computed: false, optional: false, required: true
  private _natPolicy?: string; 
  public get natPolicy() {
    return this.getStringAttribute('nat_policy');
  }
  public set natPolicy(value: string) {
    this._natPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natPolicyInput() {
    return this._natPolicy;
  }

  // nat_type - computed: false, optional: false, required: true
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // net_to_net - computed: false, optional: true, required: false
  private _netToNet?: boolean | cdktf.IResolvable; 
  public get netToNet() {
    return this.getBooleanAttribute('net_to_net');
  }
  public set netToNet(value: boolean | cdktf.IResolvable) {
    this._netToNet = value;
  }
  public resetNetToNet() {
    this._netToNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netToNetInput() {
    return this._netToNet;
  }

  // no_proxy_arp - computed: false, optional: true, required: false
  private _noProxyArp?: boolean | cdktf.IResolvable; 
  public get noProxyArp() {
    return this.getBooleanAttribute('no_proxy_arp');
  }
  public set noProxyArp(value: boolean | cdktf.IResolvable) {
    this._noProxyArp = value;
  }
  public resetNoProxyArp() {
    this._noProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyArpInput() {
    return this._noProxyArp;
  }

  // perform_route_lookup - computed: false, optional: true, required: false
  private _performRouteLookup?: boolean | cdktf.IResolvable; 
  public get performRouteLookup() {
    return this.getBooleanAttribute('perform_route_lookup');
  }
  public set performRouteLookup(value: boolean | cdktf.IResolvable) {
    this._performRouteLookup = value;
  }
  public resetPerformRouteLookup() {
    this._performRouteLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performRouteLookupInput() {
    return this._performRouteLookup;
  }

  // section - computed: false, optional: true, required: false
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  public resetSection() {
    this._section = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // target_index - computed: false, optional: true, required: false
  private _targetIndex?: string; 
  public get targetIndex() {
    return this.getStringAttribute('target_index');
  }
  public set targetIndex(value: string) {
    this._targetIndex = value;
  }
  public resetTargetIndex() {
    this._targetIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIndexInput() {
    return this._targetIndex;
  }

  // translate_dns - computed: false, optional: true, required: false
  private _translateDns?: boolean | cdktf.IResolvable; 
  public get translateDns() {
    return this.getBooleanAttribute('translate_dns');
  }
  public set translateDns(value: boolean | cdktf.IResolvable) {
    this._translateDns = value;
  }
  public resetTranslateDns() {
    this._translateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateDnsInput() {
    return this._translateDns;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unidirectional - computed: false, optional: true, required: false
  private _unidirectional?: boolean | cdktf.IResolvable; 
  public get unidirectional() {
    return this.getBooleanAttribute('unidirectional');
  }
  public set unidirectional(value: boolean | cdktf.IResolvable) {
    this._unidirectional = value;
  }
  public resetUnidirectional() {
    this._unidirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unidirectionalInput() {
    return this._unidirectional;
  }

  // destination_interface - computed: false, optional: true, required: false
  private _destinationInterface = new FtdManualnatRulesDestinationInterfaceOutputReference(this, "destination_interface");
  public get destinationInterface() {
    return this._destinationInterface;
  }
  public putDestinationInterface(value: FtdManualnatRulesDestinationInterface) {
    this._destinationInterface.internalValue = value;
  }
  public resetDestinationInterface() {
    this._destinationInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInterfaceInput() {
    return this._destinationInterface.internalValue;
  }

  // original_destination - computed: false, optional: true, required: false
  private _originalDestination = new FtdManualnatRulesOriginalDestinationOutputReference(this, "original_destination");
  public get originalDestination() {
    return this._originalDestination;
  }
  public putOriginalDestination(value: FtdManualnatRulesOriginalDestination) {
    this._originalDestination.internalValue = value;
  }
  public resetOriginalDestination() {
    this._originalDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDestinationInput() {
    return this._originalDestination.internalValue;
  }

  // original_destination_port - computed: false, optional: true, required: false
  private _originalDestinationPort = new FtdManualnatRulesOriginalDestinationPortOutputReference(this, "original_destination_port");
  public get originalDestinationPort() {
    return this._originalDestinationPort;
  }
  public putOriginalDestinationPort(value: FtdManualnatRulesOriginalDestinationPort) {
    this._originalDestinationPort.internalValue = value;
  }
  public resetOriginalDestinationPort() {
    this._originalDestinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDestinationPortInput() {
    return this._originalDestinationPort.internalValue;
  }

  // original_source - computed: false, optional: false, required: true
  private _originalSource = new FtdManualnatRulesOriginalSourceOutputReference(this, "original_source");
  public get originalSource() {
    return this._originalSource;
  }
  public putOriginalSource(value: FtdManualnatRulesOriginalSource) {
    this._originalSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalSourceInput() {
    return this._originalSource.internalValue;
  }

  // original_source_port - computed: false, optional: true, required: false
  private _originalSourcePort = new FtdManualnatRulesOriginalSourcePortOutputReference(this, "original_source_port");
  public get originalSourcePort() {
    return this._originalSourcePort;
  }
  public putOriginalSourcePort(value: FtdManualnatRulesOriginalSourcePort) {
    this._originalSourcePort.internalValue = value;
  }
  public resetOriginalSourcePort() {
    this._originalSourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalSourcePortInput() {
    return this._originalSourcePort.internalValue;
  }

  // pat_options - computed: false, optional: true, required: false
  private _patOptions = new FtdManualnatRulesPatOptionsOutputReference(this, "pat_options");
  public get patOptions() {
    return this._patOptions;
  }
  public putPatOptions(value: FtdManualnatRulesPatOptions) {
    this._patOptions.internalValue = value;
  }
  public resetPatOptions() {
    this._patOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patOptionsInput() {
    return this._patOptions.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface = new FtdManualnatRulesSourceInterfaceOutputReference(this, "source_interface");
  public get sourceInterface() {
    return this._sourceInterface;
  }
  public putSourceInterface(value: FtdManualnatRulesSourceInterface) {
    this._sourceInterface.internalValue = value;
  }
  public resetSourceInterface() {
    this._sourceInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface.internalValue;
  }

  // translated_destination - computed: false, optional: true, required: false
  private _translatedDestination = new FtdManualnatRulesTranslatedDestinationOutputReference(this, "translated_destination");
  public get translatedDestination() {
    return this._translatedDestination;
  }
  public putTranslatedDestination(value: FtdManualnatRulesTranslatedDestination) {
    this._translatedDestination.internalValue = value;
  }
  public resetTranslatedDestination() {
    this._translatedDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedDestinationInput() {
    return this._translatedDestination.internalValue;
  }

  // translated_destination_port - computed: false, optional: true, required: false
  private _translatedDestinationPort = new FtdManualnatRulesTranslatedDestinationPortOutputReference(this, "translated_destination_port");
  public get translatedDestinationPort() {
    return this._translatedDestinationPort;
  }
  public putTranslatedDestinationPort(value: FtdManualnatRulesTranslatedDestinationPort) {
    this._translatedDestinationPort.internalValue = value;
  }
  public resetTranslatedDestinationPort() {
    this._translatedDestinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedDestinationPortInput() {
    return this._translatedDestinationPort.internalValue;
  }

  // translated_source - computed: false, optional: true, required: false
  private _translatedSource = new FtdManualnatRulesTranslatedSourceOutputReference(this, "translated_source");
  public get translatedSource() {
    return this._translatedSource;
  }
  public putTranslatedSource(value: FtdManualnatRulesTranslatedSource) {
    this._translatedSource.internalValue = value;
  }
  public resetTranslatedSource() {
    this._translatedSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceInput() {
    return this._translatedSource.internalValue;
  }

  // translated_source_port - computed: false, optional: true, required: false
  private _translatedSourcePort = new FtdManualnatRulesTranslatedSourcePortOutputReference(this, "translated_source_port");
  public get translatedSourcePort() {
    return this._translatedSourcePort;
  }
  public putTranslatedSourcePort(value: FtdManualnatRulesTranslatedSourcePort) {
    this._translatedSourcePort.internalValue = value;
  }
  public resetTranslatedSourcePort() {
    this._translatedSourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourcePortInput() {
    return this._translatedSourcePort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fallthrough: cdktf.booleanToTerraform(this._fallthrough),
      id: cdktf.stringToTerraform(this._id),
      interface_in_original_destination: cdktf.booleanToTerraform(this._interfaceInOriginalDestination),
      interface_in_translated_source: cdktf.booleanToTerraform(this._interfaceInTranslatedSource),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      nat_policy: cdktf.stringToTerraform(this._natPolicy),
      nat_type: cdktf.stringToTerraform(this._natType),
      net_to_net: cdktf.booleanToTerraform(this._netToNet),
      no_proxy_arp: cdktf.booleanToTerraform(this._noProxyArp),
      perform_route_lookup: cdktf.booleanToTerraform(this._performRouteLookup),
      section: cdktf.stringToTerraform(this._section),
      target_index: cdktf.stringToTerraform(this._targetIndex),
      translate_dns: cdktf.booleanToTerraform(this._translateDns),
      unidirectional: cdktf.booleanToTerraform(this._unidirectional),
      destination_interface: ftdManualnatRulesDestinationInterfaceToTerraform(this._destinationInterface.internalValue),
      original_destination: ftdManualnatRulesOriginalDestinationToTerraform(this._originalDestination.internalValue),
      original_destination_port: ftdManualnatRulesOriginalDestinationPortToTerraform(this._originalDestinationPort.internalValue),
      original_source: ftdManualnatRulesOriginalSourceToTerraform(this._originalSource.internalValue),
      original_source_port: ftdManualnatRulesOriginalSourcePortToTerraform(this._originalSourcePort.internalValue),
      pat_options: ftdManualnatRulesPatOptionsToTerraform(this._patOptions.internalValue),
      source_interface: ftdManualnatRulesSourceInterfaceToTerraform(this._sourceInterface.internalValue),
      translated_destination: ftdManualnatRulesTranslatedDestinationToTerraform(this._translatedDestination.internalValue),
      translated_destination_port: ftdManualnatRulesTranslatedDestinationPortToTerraform(this._translatedDestinationPort.internalValue),
      translated_source: ftdManualnatRulesTranslatedSourceToTerraform(this._translatedSource.internalValue),
      translated_source_port: ftdManualnatRulesTranslatedSourcePortToTerraform(this._translatedSourcePort.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallthrough: {
        value: cdktf.booleanToHclTerraform(this._fallthrough),
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
      interface_in_original_destination: {
        value: cdktf.booleanToHclTerraform(this._interfaceInOriginalDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_in_translated_source: {
        value: cdktf.booleanToHclTerraform(this._interfaceInTranslatedSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_policy: {
        value: cdktf.stringToHclTerraform(this._natPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_type: {
        value: cdktf.stringToHclTerraform(this._natType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_to_net: {
        value: cdktf.booleanToHclTerraform(this._netToNet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_proxy_arp: {
        value: cdktf.booleanToHclTerraform(this._noProxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perform_route_lookup: {
        value: cdktf.booleanToHclTerraform(this._performRouteLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      section: {
        value: cdktf.stringToHclTerraform(this._section),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_index: {
        value: cdktf.stringToHclTerraform(this._targetIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translate_dns: {
        value: cdktf.booleanToHclTerraform(this._translateDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unidirectional: {
        value: cdktf.booleanToHclTerraform(this._unidirectional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination_interface: {
        value: ftdManualnatRulesDestinationInterfaceToHclTerraform(this._destinationInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesDestinationInterfaceList",
      },
      original_destination: {
        value: ftdManualnatRulesOriginalDestinationToHclTerraform(this._originalDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesOriginalDestinationList",
      },
      original_destination_port: {
        value: ftdManualnatRulesOriginalDestinationPortToHclTerraform(this._originalDestinationPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesOriginalDestinationPortList",
      },
      original_source: {
        value: ftdManualnatRulesOriginalSourceToHclTerraform(this._originalSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesOriginalSourceList",
      },
      original_source_port: {
        value: ftdManualnatRulesOriginalSourcePortToHclTerraform(this._originalSourcePort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesOriginalSourcePortList",
      },
      pat_options: {
        value: ftdManualnatRulesPatOptionsToHclTerraform(this._patOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesPatOptionsList",
      },
      source_interface: {
        value: ftdManualnatRulesSourceInterfaceToHclTerraform(this._sourceInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesSourceInterfaceList",
      },
      translated_destination: {
        value: ftdManualnatRulesTranslatedDestinationToHclTerraform(this._translatedDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesTranslatedDestinationList",
      },
      translated_destination_port: {
        value: ftdManualnatRulesTranslatedDestinationPortToHclTerraform(this._translatedDestinationPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesTranslatedDestinationPortList",
      },
      translated_source: {
        value: ftdManualnatRulesTranslatedSourceToHclTerraform(this._translatedSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesTranslatedSourceList",
      },
      translated_source_port: {
        value: ftdManualnatRulesTranslatedSourcePortToHclTerraform(this._translatedSourcePort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdManualnatRulesTranslatedSourcePortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

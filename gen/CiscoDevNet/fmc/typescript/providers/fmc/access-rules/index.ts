// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the ACP this resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#acp AccessRules#acp}
  */
  readonly acp: string;
  /**
  * Action for this resource, "ALLOW", "TRUST", "BLOCK", "MONITOR", "BLOCK_RESET", "BLOCK_INTERACTIVE" or "BLOCK_RESET_INTERACTIVE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#action AccessRules#action}
  */
  readonly action: string;
  /**
  * The Category of the ACP this resource belongs to. Should be created upfront with fmc_access_policies_category resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#category AccessRules#category}
  */
  readonly category?: string;
  /**
  * Enable syslog for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#enable_syslog AccessRules#enable_syslog}
  */
  readonly enableSyslog?: boolean | cdktf.IResolvable;
  /**
  * Enable the resourceFmc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#enabled AccessRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * File policy for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#file_policy AccessRules#file_policy}
  */
  readonly filePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The rule number after which to insert this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#insert_after AccessRules#insert_after}
  */
  readonly insertAfter?: number;
  /**
  * The rule number before which to insert this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#insert_before AccessRules#insert_before}
  */
  readonly insertBefore?: number;
  /**
  * IPS policy for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#ips_policy AccessRules#ips_policy}
  */
  readonly ipsPolicy?: string;
  /**
  * Enable logging at the beginning of connection for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#log_begin AccessRules#log_begin}
  */
  readonly logBegin?: boolean | cdktf.IResolvable;
  /**
  * Enable logging at the end of connection for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#log_end AccessRules#log_end}
  */
  readonly logEnd?: boolean | cdktf.IResolvable;
  /**
  * Enable logging files for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#log_files AccessRules#log_files}
  */
  readonly logFiles?: boolean | cdktf.IResolvable;
  /**
  * The name of the resourceFmc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#name AccessRules#name}
  */
  readonly name: string;
  /**
  * New comments to be added for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#new_comments AccessRules#new_comments}
  */
  readonly newComments?: string[];
  /**
  * Section for this resource, "mandatory" or "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#section AccessRules#section}
  */
  readonly section?: string;
  /**
  * Enable sending events to FMC for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#send_events_to_fmc AccessRules#send_events_to_fmc}
  */
  readonly sendEventsToFmc?: boolean | cdktf.IResolvable;
  /**
  * Syslog configuration ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#syslog_config AccessRules#syslog_config}
  */
  readonly syslogConfig?: string;
  /**
  * Syslog severity for this resource, "ALERT", "CRIT", "DEBUG", "EMERG", "ERR", "INFO", "NOTICE" or "WARNING"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#syslog_severity AccessRules#syslog_severity}
  */
  readonly syslogSeverity?: string;
  /**
  * destination_dynamic_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_dynamic_objects AccessRules#destination_dynamic_objects}
  */
  readonly destinationDynamicObjects?: AccessRulesDestinationDynamicObjects;
  /**
  * destination_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_networks AccessRules#destination_networks}
  */
  readonly destinationNetworks?: AccessRulesDestinationNetworks;
  /**
  * destination_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_ports AccessRules#destination_ports}
  */
  readonly destinationPorts?: AccessRulesDestinationPorts;
  /**
  * destination_security_group_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_security_group_tags AccessRules#destination_security_group_tags}
  */
  readonly destinationSecurityGroupTags?: AccessRulesDestinationSecurityGroupTags;
  /**
  * destination_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_zones AccessRules#destination_zones}
  */
  readonly destinationZones?: AccessRulesDestinationZones;
  /**
  * source_dynamic_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_dynamic_objects AccessRules#source_dynamic_objects}
  */
  readonly sourceDynamicObjects?: AccessRulesSourceDynamicObjects;
  /**
  * source_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_networks AccessRules#source_networks}
  */
  readonly sourceNetworks?: AccessRulesSourceNetworks;
  /**
  * source_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_ports AccessRules#source_ports}
  */
  readonly sourcePorts?: AccessRulesSourcePorts;
  /**
  * source_security_group_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_security_group_tags AccessRules#source_security_group_tags}
  */
  readonly sourceSecurityGroupTags?: AccessRulesSourceSecurityGroupTags;
  /**
  * source_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_zones AccessRules#source_zones}
  */
  readonly sourceZones?: AccessRulesSourceZones;
  /**
  * urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#urls AccessRules#urls}
  */
  readonly urls?: AccessRulesUrls;
}
export interface AccessRulesDestinationDynamicObjectsDestinationDynamicObject {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesDestinationDynamicObjectsDestinationDynamicObjectToTerraform(struct?: AccessRulesDestinationDynamicObjectsDestinationDynamicObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesDestinationDynamicObjectsDestinationDynamicObjectToHclTerraform(struct?: AccessRulesDestinationDynamicObjectsDestinationDynamicObject | cdktf.IResolvable): any {
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

export class AccessRulesDestinationDynamicObjectsDestinationDynamicObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesDestinationDynamicObjectsDestinationDynamicObject | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationDynamicObjectsDestinationDynamicObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesDestinationDynamicObjectsDestinationDynamicObjectList extends cdktf.ComplexList {
  public internalValue? : AccessRulesDestinationDynamicObjectsDestinationDynamicObject[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesDestinationDynamicObjectsDestinationDynamicObjectOutputReference {
    return new AccessRulesDestinationDynamicObjectsDestinationDynamicObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesDestinationDynamicObjects {
  /**
  * destination_dynamic_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_dynamic_object AccessRules#destination_dynamic_object}
  */
  readonly destinationDynamicObject: AccessRulesDestinationDynamicObjectsDestinationDynamicObject[] | cdktf.IResolvable;
}

export function accessRulesDestinationDynamicObjectsToTerraform(struct?: AccessRulesDestinationDynamicObjectsOutputReference | AccessRulesDestinationDynamicObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_dynamic_object: cdktf.listMapper(accessRulesDestinationDynamicObjectsDestinationDynamicObjectToTerraform, true)(struct!.destinationDynamicObject),
  }
}


export function accessRulesDestinationDynamicObjectsToHclTerraform(struct?: AccessRulesDestinationDynamicObjectsOutputReference | AccessRulesDestinationDynamicObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_dynamic_object: {
      value: cdktf.listMapperHcl(accessRulesDestinationDynamicObjectsDestinationDynamicObjectToHclTerraform, true)(struct!.destinationDynamicObject),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesDestinationDynamicObjectsDestinationDynamicObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesDestinationDynamicObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesDestinationDynamicObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDynamicObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDynamicObject = this._destinationDynamicObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationDynamicObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationDynamicObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationDynamicObject.internalValue = value.destinationDynamicObject;
    }
  }

  // destination_dynamic_object - computed: false, optional: false, required: true
  private _destinationDynamicObject = new AccessRulesDestinationDynamicObjectsDestinationDynamicObjectList(this, "destination_dynamic_object", false);
  public get destinationDynamicObject() {
    return this._destinationDynamicObject;
  }
  public putDestinationDynamicObject(value: AccessRulesDestinationDynamicObjectsDestinationDynamicObject[] | cdktf.IResolvable) {
    this._destinationDynamicObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDynamicObjectInput() {
    return this._destinationDynamicObject.internalValue;
  }
}
export interface AccessRulesDestinationNetworksDestinationNetwork {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesDestinationNetworksDestinationNetworkToTerraform(struct?: AccessRulesDestinationNetworksDestinationNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesDestinationNetworksDestinationNetworkToHclTerraform(struct?: AccessRulesDestinationNetworksDestinationNetwork | cdktf.IResolvable): any {
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

export class AccessRulesDestinationNetworksDestinationNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesDestinationNetworksDestinationNetwork | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationNetworksDestinationNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesDestinationNetworksDestinationNetworkList extends cdktf.ComplexList {
  public internalValue? : AccessRulesDestinationNetworksDestinationNetwork[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesDestinationNetworksDestinationNetworkOutputReference {
    return new AccessRulesDestinationNetworksDestinationNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesDestinationNetworks {
  /**
  * destination_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_network AccessRules#destination_network}
  */
  readonly destinationNetwork: AccessRulesDestinationNetworksDestinationNetwork[] | cdktf.IResolvable;
}

export function accessRulesDestinationNetworksToTerraform(struct?: AccessRulesDestinationNetworksOutputReference | AccessRulesDestinationNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_network: cdktf.listMapper(accessRulesDestinationNetworksDestinationNetworkToTerraform, true)(struct!.destinationNetwork),
  }
}


export function accessRulesDestinationNetworksToHclTerraform(struct?: AccessRulesDestinationNetworksOutputReference | AccessRulesDestinationNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_network: {
      value: cdktf.listMapperHcl(accessRulesDestinationNetworksDestinationNetworkToHclTerraform, true)(struct!.destinationNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesDestinationNetworksDestinationNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesDestinationNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesDestinationNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNetwork = this._destinationNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationNetwork.internalValue = value.destinationNetwork;
    }
  }

  // destination_network - computed: false, optional: false, required: true
  private _destinationNetwork = new AccessRulesDestinationNetworksDestinationNetworkList(this, "destination_network", false);
  public get destinationNetwork() {
    return this._destinationNetwork;
  }
  public putDestinationNetwork(value: AccessRulesDestinationNetworksDestinationNetwork[] | cdktf.IResolvable) {
    this._destinationNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkInput() {
    return this._destinationNetwork.internalValue;
  }
}
export interface AccessRulesDestinationPortsDestinationPort {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesDestinationPortsDestinationPortToTerraform(struct?: AccessRulesDestinationPortsDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesDestinationPortsDestinationPortToHclTerraform(struct?: AccessRulesDestinationPortsDestinationPort | cdktf.IResolvable): any {
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

export class AccessRulesDestinationPortsDestinationPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesDestinationPortsDestinationPort | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationPortsDestinationPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesDestinationPortsDestinationPortList extends cdktf.ComplexList {
  public internalValue? : AccessRulesDestinationPortsDestinationPort[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesDestinationPortsDestinationPortOutputReference {
    return new AccessRulesDestinationPortsDestinationPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesDestinationPorts {
  /**
  * destination_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_port AccessRules#destination_port}
  */
  readonly destinationPort: AccessRulesDestinationPortsDestinationPort[] | cdktf.IResolvable;
}

export function accessRulesDestinationPortsToTerraform(struct?: AccessRulesDestinationPortsOutputReference | AccessRulesDestinationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port: cdktf.listMapper(accessRulesDestinationPortsDestinationPortToTerraform, true)(struct!.destinationPort),
  }
}


export function accessRulesDestinationPortsToHclTerraform(struct?: AccessRulesDestinationPortsOutputReference | AccessRulesDestinationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port: {
      value: cdktf.listMapperHcl(accessRulesDestinationPortsDestinationPortToHclTerraform, true)(struct!.destinationPort),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesDestinationPortsDestinationPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesDestinationPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesDestinationPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPort.internalValue = value.destinationPort;
    }
  }

  // destination_port - computed: false, optional: false, required: true
  private _destinationPort = new AccessRulesDestinationPortsDestinationPortList(this, "destination_port", false);
  public get destinationPort() {
    return this._destinationPort;
  }
  public putDestinationPort(value: AccessRulesDestinationPortsDestinationPort[] | cdktf.IResolvable) {
    this._destinationPort.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort.internalValue;
  }
}
export interface AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagToTerraform(struct?: AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagToHclTerraform(struct?: AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag | cdktf.IResolvable): any {
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

export class AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagList extends cdktf.ComplexList {
  public internalValue? : AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagOutputReference {
    return new AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesDestinationSecurityGroupTags {
  /**
  * destination_security_group_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_security_group_tag AccessRules#destination_security_group_tag}
  */
  readonly destinationSecurityGroupTag: AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag[] | cdktf.IResolvable;
}

export function accessRulesDestinationSecurityGroupTagsToTerraform(struct?: AccessRulesDestinationSecurityGroupTagsOutputReference | AccessRulesDestinationSecurityGroupTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_security_group_tag: cdktf.listMapper(accessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagToTerraform, true)(struct!.destinationSecurityGroupTag),
  }
}


export function accessRulesDestinationSecurityGroupTagsToHclTerraform(struct?: AccessRulesDestinationSecurityGroupTagsOutputReference | AccessRulesDestinationSecurityGroupTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_security_group_tag: {
      value: cdktf.listMapperHcl(accessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagToHclTerraform, true)(struct!.destinationSecurityGroupTag),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesDestinationSecurityGroupTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesDestinationSecurityGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationSecurityGroupTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSecurityGroupTag = this._destinationSecurityGroupTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationSecurityGroupTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationSecurityGroupTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationSecurityGroupTag.internalValue = value.destinationSecurityGroupTag;
    }
  }

  // destination_security_group_tag - computed: false, optional: false, required: true
  private _destinationSecurityGroupTag = new AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTagList(this, "destination_security_group_tag", false);
  public get destinationSecurityGroupTag() {
    return this._destinationSecurityGroupTag;
  }
  public putDestinationSecurityGroupTag(value: AccessRulesDestinationSecurityGroupTagsDestinationSecurityGroupTag[] | cdktf.IResolvable) {
    this._destinationSecurityGroupTag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSecurityGroupTagInput() {
    return this._destinationSecurityGroupTag.internalValue;
  }
}
export interface AccessRulesDestinationZonesDestinationZone {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesDestinationZonesDestinationZoneToTerraform(struct?: AccessRulesDestinationZonesDestinationZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesDestinationZonesDestinationZoneToHclTerraform(struct?: AccessRulesDestinationZonesDestinationZone | cdktf.IResolvable): any {
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

export class AccessRulesDestinationZonesDestinationZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesDestinationZonesDestinationZone | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationZonesDestinationZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesDestinationZonesDestinationZoneList extends cdktf.ComplexList {
  public internalValue? : AccessRulesDestinationZonesDestinationZone[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesDestinationZonesDestinationZoneOutputReference {
    return new AccessRulesDestinationZonesDestinationZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesDestinationZones {
  /**
  * destination_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#destination_zone AccessRules#destination_zone}
  */
  readonly destinationZone: AccessRulesDestinationZonesDestinationZone[] | cdktf.IResolvable;
}

export function accessRulesDestinationZonesToTerraform(struct?: AccessRulesDestinationZonesOutputReference | AccessRulesDestinationZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_zone: cdktf.listMapper(accessRulesDestinationZonesDestinationZoneToTerraform, true)(struct!.destinationZone),
  }
}


export function accessRulesDestinationZonesToHclTerraform(struct?: AccessRulesDestinationZonesOutputReference | AccessRulesDestinationZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_zone: {
      value: cdktf.listMapperHcl(accessRulesDestinationZonesDestinationZoneToHclTerraform, true)(struct!.destinationZone),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesDestinationZonesDestinationZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesDestinationZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesDestinationZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationZone = this._destinationZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesDestinationZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationZone.internalValue = value.destinationZone;
    }
  }

  // destination_zone - computed: false, optional: false, required: true
  private _destinationZone = new AccessRulesDestinationZonesDestinationZoneList(this, "destination_zone", false);
  public get destinationZone() {
    return this._destinationZone;
  }
  public putDestinationZone(value: AccessRulesDestinationZonesDestinationZone[] | cdktf.IResolvable) {
    this._destinationZone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZoneInput() {
    return this._destinationZone.internalValue;
  }
}
export interface AccessRulesSourceDynamicObjectsSourceDynamicObject {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesSourceDynamicObjectsSourceDynamicObjectToTerraform(struct?: AccessRulesSourceDynamicObjectsSourceDynamicObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesSourceDynamicObjectsSourceDynamicObjectToHclTerraform(struct?: AccessRulesSourceDynamicObjectsSourceDynamicObject | cdktf.IResolvable): any {
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

export class AccessRulesSourceDynamicObjectsSourceDynamicObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesSourceDynamicObjectsSourceDynamicObject | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceDynamicObjectsSourceDynamicObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesSourceDynamicObjectsSourceDynamicObjectList extends cdktf.ComplexList {
  public internalValue? : AccessRulesSourceDynamicObjectsSourceDynamicObject[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesSourceDynamicObjectsSourceDynamicObjectOutputReference {
    return new AccessRulesSourceDynamicObjectsSourceDynamicObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesSourceDynamicObjects {
  /**
  * source_dynamic_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_dynamic_object AccessRules#source_dynamic_object}
  */
  readonly sourceDynamicObject: AccessRulesSourceDynamicObjectsSourceDynamicObject[] | cdktf.IResolvable;
}

export function accessRulesSourceDynamicObjectsToTerraform(struct?: AccessRulesSourceDynamicObjectsOutputReference | AccessRulesSourceDynamicObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_dynamic_object: cdktf.listMapper(accessRulesSourceDynamicObjectsSourceDynamicObjectToTerraform, true)(struct!.sourceDynamicObject),
  }
}


export function accessRulesSourceDynamicObjectsToHclTerraform(struct?: AccessRulesSourceDynamicObjectsOutputReference | AccessRulesSourceDynamicObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_dynamic_object: {
      value: cdktf.listMapperHcl(accessRulesSourceDynamicObjectsSourceDynamicObjectToHclTerraform, true)(struct!.sourceDynamicObject),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesSourceDynamicObjectsSourceDynamicObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesSourceDynamicObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesSourceDynamicObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceDynamicObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDynamicObject = this._sourceDynamicObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceDynamicObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceDynamicObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceDynamicObject.internalValue = value.sourceDynamicObject;
    }
  }

  // source_dynamic_object - computed: false, optional: false, required: true
  private _sourceDynamicObject = new AccessRulesSourceDynamicObjectsSourceDynamicObjectList(this, "source_dynamic_object", false);
  public get sourceDynamicObject() {
    return this._sourceDynamicObject;
  }
  public putSourceDynamicObject(value: AccessRulesSourceDynamicObjectsSourceDynamicObject[] | cdktf.IResolvable) {
    this._sourceDynamicObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDynamicObjectInput() {
    return this._sourceDynamicObject.internalValue;
  }
}
export interface AccessRulesSourceNetworksSourceNetwork {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesSourceNetworksSourceNetworkToTerraform(struct?: AccessRulesSourceNetworksSourceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesSourceNetworksSourceNetworkToHclTerraform(struct?: AccessRulesSourceNetworksSourceNetwork | cdktf.IResolvable): any {
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

export class AccessRulesSourceNetworksSourceNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesSourceNetworksSourceNetwork | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceNetworksSourceNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesSourceNetworksSourceNetworkList extends cdktf.ComplexList {
  public internalValue? : AccessRulesSourceNetworksSourceNetwork[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesSourceNetworksSourceNetworkOutputReference {
    return new AccessRulesSourceNetworksSourceNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesSourceNetworks {
  /**
  * source_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_network AccessRules#source_network}
  */
  readonly sourceNetwork: AccessRulesSourceNetworksSourceNetwork[] | cdktf.IResolvable;
}

export function accessRulesSourceNetworksToTerraform(struct?: AccessRulesSourceNetworksOutputReference | AccessRulesSourceNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_network: cdktf.listMapper(accessRulesSourceNetworksSourceNetworkToTerraform, true)(struct!.sourceNetwork),
  }
}


export function accessRulesSourceNetworksToHclTerraform(struct?: AccessRulesSourceNetworksOutputReference | AccessRulesSourceNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_network: {
      value: cdktf.listMapperHcl(accessRulesSourceNetworksSourceNetworkToHclTerraform, true)(struct!.sourceNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesSourceNetworksSourceNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesSourceNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesSourceNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNetwork = this._sourceNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceNetwork.internalValue = value.sourceNetwork;
    }
  }

  // source_network - computed: false, optional: false, required: true
  private _sourceNetwork = new AccessRulesSourceNetworksSourceNetworkList(this, "source_network", false);
  public get sourceNetwork() {
    return this._sourceNetwork;
  }
  public putSourceNetwork(value: AccessRulesSourceNetworksSourceNetwork[] | cdktf.IResolvable) {
    this._sourceNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInput() {
    return this._sourceNetwork.internalValue;
  }
}
export interface AccessRulesSourcePortsSourcePort {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesSourcePortsSourcePortToTerraform(struct?: AccessRulesSourcePortsSourcePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesSourcePortsSourcePortToHclTerraform(struct?: AccessRulesSourcePortsSourcePort | cdktf.IResolvable): any {
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

export class AccessRulesSourcePortsSourcePortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesSourcePortsSourcePort | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourcePortsSourcePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesSourcePortsSourcePortList extends cdktf.ComplexList {
  public internalValue? : AccessRulesSourcePortsSourcePort[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesSourcePortsSourcePortOutputReference {
    return new AccessRulesSourcePortsSourcePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesSourcePorts {
  /**
  * source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_port AccessRules#source_port}
  */
  readonly sourcePort: AccessRulesSourcePortsSourcePort[] | cdktf.IResolvable;
}

export function accessRulesSourcePortsToTerraform(struct?: AccessRulesSourcePortsOutputReference | AccessRulesSourcePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_port: cdktf.listMapper(accessRulesSourcePortsSourcePortToTerraform, true)(struct!.sourcePort),
  }
}


export function accessRulesSourcePortsToHclTerraform(struct?: AccessRulesSourcePortsOutputReference | AccessRulesSourcePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_port: {
      value: cdktf.listMapperHcl(accessRulesSourcePortsSourcePortToHclTerraform, true)(struct!.sourcePort),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesSourcePortsSourcePortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesSourcePortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesSourcePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourcePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourcePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourcePort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourcePort.internalValue = value.sourcePort;
    }
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort = new AccessRulesSourcePortsSourcePortList(this, "source_port", false);
  public get sourcePort() {
    return this._sourcePort;
  }
  public putSourcePort(value: AccessRulesSourcePortsSourcePort[] | cdktf.IResolvable) {
    this._sourcePort.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort.internalValue;
  }
}
export interface AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesSourceSecurityGroupTagsSourceSecurityGroupTagToTerraform(struct?: AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesSourceSecurityGroupTagsSourceSecurityGroupTagToHclTerraform(struct?: AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag | cdktf.IResolvable): any {
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

export class AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTagList extends cdktf.ComplexList {
  public internalValue? : AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTagOutputReference {
    return new AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesSourceSecurityGroupTags {
  /**
  * source_security_group_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_security_group_tag AccessRules#source_security_group_tag}
  */
  readonly sourceSecurityGroupTag: AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag[] | cdktf.IResolvable;
}

export function accessRulesSourceSecurityGroupTagsToTerraform(struct?: AccessRulesSourceSecurityGroupTagsOutputReference | AccessRulesSourceSecurityGroupTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_security_group_tag: cdktf.listMapper(accessRulesSourceSecurityGroupTagsSourceSecurityGroupTagToTerraform, true)(struct!.sourceSecurityGroupTag),
  }
}


export function accessRulesSourceSecurityGroupTagsToHclTerraform(struct?: AccessRulesSourceSecurityGroupTagsOutputReference | AccessRulesSourceSecurityGroupTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_security_group_tag: {
      value: cdktf.listMapperHcl(accessRulesSourceSecurityGroupTagsSourceSecurityGroupTagToHclTerraform, true)(struct!.sourceSecurityGroupTag),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesSourceSecurityGroupTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesSourceSecurityGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceSecurityGroupTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityGroupTag = this._sourceSecurityGroupTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceSecurityGroupTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceSecurityGroupTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceSecurityGroupTag.internalValue = value.sourceSecurityGroupTag;
    }
  }

  // source_security_group_tag - computed: false, optional: false, required: true
  private _sourceSecurityGroupTag = new AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTagList(this, "source_security_group_tag", false);
  public get sourceSecurityGroupTag() {
    return this._sourceSecurityGroupTag;
  }
  public putSourceSecurityGroupTag(value: AccessRulesSourceSecurityGroupTagsSourceSecurityGroupTag[] | cdktf.IResolvable) {
    this._sourceSecurityGroupTag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupTagInput() {
    return this._sourceSecurityGroupTag.internalValue;
  }
}
export interface AccessRulesSourceZonesSourceZone {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesSourceZonesSourceZoneToTerraform(struct?: AccessRulesSourceZonesSourceZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesSourceZonesSourceZoneToHclTerraform(struct?: AccessRulesSourceZonesSourceZone | cdktf.IResolvable): any {
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

export class AccessRulesSourceZonesSourceZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesSourceZonesSourceZone | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceZonesSourceZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesSourceZonesSourceZoneList extends cdktf.ComplexList {
  public internalValue? : AccessRulesSourceZonesSourceZone[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesSourceZonesSourceZoneOutputReference {
    return new AccessRulesSourceZonesSourceZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesSourceZones {
  /**
  * source_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#source_zone AccessRules#source_zone}
  */
  readonly sourceZone: AccessRulesSourceZonesSourceZone[] | cdktf.IResolvable;
}

export function accessRulesSourceZonesToTerraform(struct?: AccessRulesSourceZonesOutputReference | AccessRulesSourceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_zone: cdktf.listMapper(accessRulesSourceZonesSourceZoneToTerraform, true)(struct!.sourceZone),
  }
}


export function accessRulesSourceZonesToHclTerraform(struct?: AccessRulesSourceZonesOutputReference | AccessRulesSourceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_zone: {
      value: cdktf.listMapperHcl(accessRulesSourceZonesSourceZoneToHclTerraform, true)(struct!.sourceZone),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesSourceZonesSourceZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesSourceZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesSourceZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceZone = this._sourceZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesSourceZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceZone.internalValue = value.sourceZone;
    }
  }

  // source_zone - computed: false, optional: false, required: true
  private _sourceZone = new AccessRulesSourceZonesSourceZoneList(this, "source_zone", false);
  public get sourceZone() {
    return this._sourceZone;
  }
  public putSourceZone(value: AccessRulesSourceZonesSourceZone[] | cdktf.IResolvable) {
    this._sourceZone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZoneInput() {
    return this._sourceZone.internalValue;
  }
}
export interface AccessRulesUrlsUrl {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#id AccessRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#type AccessRules#type}
  */
  readonly type: string;
}

export function accessRulesUrlsUrlToTerraform(struct?: AccessRulesUrlsUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function accessRulesUrlsUrlToHclTerraform(struct?: AccessRulesUrlsUrl | cdktf.IResolvable): any {
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

export class AccessRulesUrlsUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessRulesUrlsUrl | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesUrlsUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
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

export class AccessRulesUrlsUrlList extends cdktf.ComplexList {
  public internalValue? : AccessRulesUrlsUrl[] | cdktf.IResolvable

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
  public get(index: number): AccessRulesUrlsUrlOutputReference {
    return new AccessRulesUrlsUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessRulesUrls {
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#url AccessRules#url}
  */
  readonly url: AccessRulesUrlsUrl[] | cdktf.IResolvable;
}

export function accessRulesUrlsToTerraform(struct?: AccessRulesUrlsOutputReference | AccessRulesUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.listMapper(accessRulesUrlsUrlToTerraform, true)(struct!.url),
  }
}


export function accessRulesUrlsToHclTerraform(struct?: AccessRulesUrlsOutputReference | AccessRulesUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.listMapperHcl(accessRulesUrlsUrlToHclTerraform, true)(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "AccessRulesUrlsUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessRulesUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessRulesUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessRulesUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url.internalValue = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url = new AccessRulesUrlsUrlList(this, "url", false);
  public get url() {
    return this._url;
  }
  public putUrl(value: AccessRulesUrlsUrl[] | cdktf.IResolvable) {
    this._url.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules fmc_access_rules}
*/
export class AccessRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_access_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessRules to import
  * @param importFromId The id of the existing AccessRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_access_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_rules fmc_access_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessRulesConfig
  */
  public constructor(scope: Construct, id: string, config: AccessRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_access_rules',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acp = config.acp;
    this._action = config.action;
    this._category = config.category;
    this._enableSyslog = config.enableSyslog;
    this._enabled = config.enabled;
    this._filePolicy = config.filePolicy;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._insertBefore = config.insertBefore;
    this._ipsPolicy = config.ipsPolicy;
    this._logBegin = config.logBegin;
    this._logEnd = config.logEnd;
    this._logFiles = config.logFiles;
    this._name = config.name;
    this._newComments = config.newComments;
    this._section = config.section;
    this._sendEventsToFmc = config.sendEventsToFmc;
    this._syslogConfig = config.syslogConfig;
    this._syslogSeverity = config.syslogSeverity;
    this._destinationDynamicObjects.internalValue = config.destinationDynamicObjects;
    this._destinationNetworks.internalValue = config.destinationNetworks;
    this._destinationPorts.internalValue = config.destinationPorts;
    this._destinationSecurityGroupTags.internalValue = config.destinationSecurityGroupTags;
    this._destinationZones.internalValue = config.destinationZones;
    this._sourceDynamicObjects.internalValue = config.sourceDynamicObjects;
    this._sourceNetworks.internalValue = config.sourceNetworks;
    this._sourcePorts.internalValue = config.sourcePorts;
    this._sourceSecurityGroupTags.internalValue = config.sourceSecurityGroupTags;
    this._sourceZones.internalValue = config.sourceZones;
    this._urls.internalValue = config.urls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acp - computed: false, optional: false, required: true
  private _acp?: string; 
  public get acp() {
    return this.getStringAttribute('acp');
  }
  public set acp(value: string) {
    this._acp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acpInput() {
    return this._acp;
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // enable_syslog - computed: false, optional: true, required: false
  private _enableSyslog?: boolean | cdktf.IResolvable; 
  public get enableSyslog() {
    return this.getBooleanAttribute('enable_syslog');
  }
  public set enableSyslog(value: boolean | cdktf.IResolvable) {
    this._enableSyslog = value;
  }
  public resetEnableSyslog() {
    this._enableSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSyslogInput() {
    return this._enableSyslog;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // file_policy - computed: false, optional: true, required: false
  private _filePolicy?: string; 
  public get filePolicy() {
    return this.getStringAttribute('file_policy');
  }
  public set filePolicy(value: string) {
    this._filePolicy = value;
  }
  public resetFilePolicy() {
    this._filePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePolicyInput() {
    return this._filePolicy;
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

  // insert_after - computed: false, optional: true, required: false
  private _insertAfter?: number; 
  public get insertAfter() {
    return this.getNumberAttribute('insert_after');
  }
  public set insertAfter(value: number) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // insert_before - computed: false, optional: true, required: false
  private _insertBefore?: number; 
  public get insertBefore() {
    return this.getNumberAttribute('insert_before');
  }
  public set insertBefore(value: number) {
    this._insertBefore = value;
  }
  public resetInsertBefore() {
    this._insertBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertBeforeInput() {
    return this._insertBefore;
  }

  // ips_policy - computed: false, optional: true, required: false
  private _ipsPolicy?: string; 
  public get ipsPolicy() {
    return this.getStringAttribute('ips_policy');
  }
  public set ipsPolicy(value: string) {
    this._ipsPolicy = value;
  }
  public resetIpsPolicy() {
    this._ipsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsPolicyInput() {
    return this._ipsPolicy;
  }

  // log_begin - computed: false, optional: true, required: false
  private _logBegin?: boolean | cdktf.IResolvable; 
  public get logBegin() {
    return this.getBooleanAttribute('log_begin');
  }
  public set logBegin(value: boolean | cdktf.IResolvable) {
    this._logBegin = value;
  }
  public resetLogBegin() {
    this._logBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBeginInput() {
    return this._logBegin;
  }

  // log_end - computed: false, optional: true, required: false
  private _logEnd?: boolean | cdktf.IResolvable; 
  public get logEnd() {
    return this.getBooleanAttribute('log_end');
  }
  public set logEnd(value: boolean | cdktf.IResolvable) {
    this._logEnd = value;
  }
  public resetLogEnd() {
    this._logEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEndInput() {
    return this._logEnd;
  }

  // log_files - computed: false, optional: true, required: false
  private _logFiles?: boolean | cdktf.IResolvable; 
  public get logFiles() {
    return this.getBooleanAttribute('log_files');
  }
  public set logFiles(value: boolean | cdktf.IResolvable) {
    this._logFiles = value;
  }
  public resetLogFiles() {
    this._logFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilesInput() {
    return this._logFiles;
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

  // new_comments - computed: false, optional: true, required: false
  private _newComments?: string[]; 
  public get newComments() {
    return this.getListAttribute('new_comments');
  }
  public set newComments(value: string[]) {
    this._newComments = value;
  }
  public resetNewComments() {
    this._newComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newCommentsInput() {
    return this._newComments;
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

  // send_events_to_fmc - computed: false, optional: true, required: false
  private _sendEventsToFmc?: boolean | cdktf.IResolvable; 
  public get sendEventsToFmc() {
    return this.getBooleanAttribute('send_events_to_fmc');
  }
  public set sendEventsToFmc(value: boolean | cdktf.IResolvable) {
    this._sendEventsToFmc = value;
  }
  public resetSendEventsToFmc() {
    this._sendEventsToFmc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEventsToFmcInput() {
    return this._sendEventsToFmc;
  }

  // syslog_config - computed: false, optional: true, required: false
  private _syslogConfig?: string; 
  public get syslogConfig() {
    return this.getStringAttribute('syslog_config');
  }
  public set syslogConfig(value: string) {
    this._syslogConfig = value;
  }
  public resetSyslogConfig() {
    this._syslogConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogConfigInput() {
    return this._syslogConfig;
  }

  // syslog_severity - computed: false, optional: true, required: false
  private _syslogSeverity?: string; 
  public get syslogSeverity() {
    return this.getStringAttribute('syslog_severity');
  }
  public set syslogSeverity(value: string) {
    this._syslogSeverity = value;
  }
  public resetSyslogSeverity() {
    this._syslogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSeverityInput() {
    return this._syslogSeverity;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // destination_dynamic_objects - computed: false, optional: true, required: false
  private _destinationDynamicObjects = new AccessRulesDestinationDynamicObjectsOutputReference(this, "destination_dynamic_objects");
  public get destinationDynamicObjects() {
    return this._destinationDynamicObjects;
  }
  public putDestinationDynamicObjects(value: AccessRulesDestinationDynamicObjects) {
    this._destinationDynamicObjects.internalValue = value;
  }
  public resetDestinationDynamicObjects() {
    this._destinationDynamicObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDynamicObjectsInput() {
    return this._destinationDynamicObjects.internalValue;
  }

  // destination_networks - computed: false, optional: true, required: false
  private _destinationNetworks = new AccessRulesDestinationNetworksOutputReference(this, "destination_networks");
  public get destinationNetworks() {
    return this._destinationNetworks;
  }
  public putDestinationNetworks(value: AccessRulesDestinationNetworks) {
    this._destinationNetworks.internalValue = value;
  }
  public resetDestinationNetworks() {
    this._destinationNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworksInput() {
    return this._destinationNetworks.internalValue;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts = new AccessRulesDestinationPortsOutputReference(this, "destination_ports");
  public get destinationPorts() {
    return this._destinationPorts;
  }
  public putDestinationPorts(value: AccessRulesDestinationPorts) {
    this._destinationPorts.internalValue = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts.internalValue;
  }

  // destination_security_group_tags - computed: false, optional: true, required: false
  private _destinationSecurityGroupTags = new AccessRulesDestinationSecurityGroupTagsOutputReference(this, "destination_security_group_tags");
  public get destinationSecurityGroupTags() {
    return this._destinationSecurityGroupTags;
  }
  public putDestinationSecurityGroupTags(value: AccessRulesDestinationSecurityGroupTags) {
    this._destinationSecurityGroupTags.internalValue = value;
  }
  public resetDestinationSecurityGroupTags() {
    this._destinationSecurityGroupTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSecurityGroupTagsInput() {
    return this._destinationSecurityGroupTags.internalValue;
  }

  // destination_zones - computed: false, optional: true, required: false
  private _destinationZones = new AccessRulesDestinationZonesOutputReference(this, "destination_zones");
  public get destinationZones() {
    return this._destinationZones;
  }
  public putDestinationZones(value: AccessRulesDestinationZones) {
    this._destinationZones.internalValue = value;
  }
  public resetDestinationZones() {
    this._destinationZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZonesInput() {
    return this._destinationZones.internalValue;
  }

  // source_dynamic_objects - computed: false, optional: true, required: false
  private _sourceDynamicObjects = new AccessRulesSourceDynamicObjectsOutputReference(this, "source_dynamic_objects");
  public get sourceDynamicObjects() {
    return this._sourceDynamicObjects;
  }
  public putSourceDynamicObjects(value: AccessRulesSourceDynamicObjects) {
    this._sourceDynamicObjects.internalValue = value;
  }
  public resetSourceDynamicObjects() {
    this._sourceDynamicObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDynamicObjectsInput() {
    return this._sourceDynamicObjects.internalValue;
  }

  // source_networks - computed: false, optional: true, required: false
  private _sourceNetworks = new AccessRulesSourceNetworksOutputReference(this, "source_networks");
  public get sourceNetworks() {
    return this._sourceNetworks;
  }
  public putSourceNetworks(value: AccessRulesSourceNetworks) {
    this._sourceNetworks.internalValue = value;
  }
  public resetSourceNetworks() {
    this._sourceNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworksInput() {
    return this._sourceNetworks.internalValue;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts = new AccessRulesSourcePortsOutputReference(this, "source_ports");
  public get sourcePorts() {
    return this._sourcePorts;
  }
  public putSourcePorts(value: AccessRulesSourcePorts) {
    this._sourcePorts.internalValue = value;
  }
  public resetSourcePorts() {
    this._sourcePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts.internalValue;
  }

  // source_security_group_tags - computed: false, optional: true, required: false
  private _sourceSecurityGroupTags = new AccessRulesSourceSecurityGroupTagsOutputReference(this, "source_security_group_tags");
  public get sourceSecurityGroupTags() {
    return this._sourceSecurityGroupTags;
  }
  public putSourceSecurityGroupTags(value: AccessRulesSourceSecurityGroupTags) {
    this._sourceSecurityGroupTags.internalValue = value;
  }
  public resetSourceSecurityGroupTags() {
    this._sourceSecurityGroupTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupTagsInput() {
    return this._sourceSecurityGroupTags.internalValue;
  }

  // source_zones - computed: false, optional: true, required: false
  private _sourceZones = new AccessRulesSourceZonesOutputReference(this, "source_zones");
  public get sourceZones() {
    return this._sourceZones;
  }
  public putSourceZones(value: AccessRulesSourceZones) {
    this._sourceZones.internalValue = value;
  }
  public resetSourceZones() {
    this._sourceZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZonesInput() {
    return this._sourceZones.internalValue;
  }

  // urls - computed: false, optional: true, required: false
  private _urls = new AccessRulesUrlsOutputReference(this, "urls");
  public get urls() {
    return this._urls;
  }
  public putUrls(value: AccessRulesUrls) {
    this._urls.internalValue = value;
  }
  public resetUrls() {
    this._urls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acp: cdktf.stringToTerraform(this._acp),
      action: cdktf.stringToTerraform(this._action),
      category: cdktf.stringToTerraform(this._category),
      enable_syslog: cdktf.booleanToTerraform(this._enableSyslog),
      enabled: cdktf.booleanToTerraform(this._enabled),
      file_policy: cdktf.stringToTerraform(this._filePolicy),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.numberToTerraform(this._insertAfter),
      insert_before: cdktf.numberToTerraform(this._insertBefore),
      ips_policy: cdktf.stringToTerraform(this._ipsPolicy),
      log_begin: cdktf.booleanToTerraform(this._logBegin),
      log_end: cdktf.booleanToTerraform(this._logEnd),
      log_files: cdktf.booleanToTerraform(this._logFiles),
      name: cdktf.stringToTerraform(this._name),
      new_comments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._newComments),
      section: cdktf.stringToTerraform(this._section),
      send_events_to_fmc: cdktf.booleanToTerraform(this._sendEventsToFmc),
      syslog_config: cdktf.stringToTerraform(this._syslogConfig),
      syslog_severity: cdktf.stringToTerraform(this._syslogSeverity),
      destination_dynamic_objects: accessRulesDestinationDynamicObjectsToTerraform(this._destinationDynamicObjects.internalValue),
      destination_networks: accessRulesDestinationNetworksToTerraform(this._destinationNetworks.internalValue),
      destination_ports: accessRulesDestinationPortsToTerraform(this._destinationPorts.internalValue),
      destination_security_group_tags: accessRulesDestinationSecurityGroupTagsToTerraform(this._destinationSecurityGroupTags.internalValue),
      destination_zones: accessRulesDestinationZonesToTerraform(this._destinationZones.internalValue),
      source_dynamic_objects: accessRulesSourceDynamicObjectsToTerraform(this._sourceDynamicObjects.internalValue),
      source_networks: accessRulesSourceNetworksToTerraform(this._sourceNetworks.internalValue),
      source_ports: accessRulesSourcePortsToTerraform(this._sourcePorts.internalValue),
      source_security_group_tags: accessRulesSourceSecurityGroupTagsToTerraform(this._sourceSecurityGroupTags.internalValue),
      source_zones: accessRulesSourceZonesToTerraform(this._sourceZones.internalValue),
      urls: accessRulesUrlsToTerraform(this._urls.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acp: {
        value: cdktf.stringToHclTerraform(this._acp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_syslog: {
        value: cdktf.booleanToHclTerraform(this._enableSyslog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_policy: {
        value: cdktf.stringToHclTerraform(this._filePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_after: {
        value: cdktf.numberToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      insert_before: {
        value: cdktf.numberToHclTerraform(this._insertBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ips_policy: {
        value: cdktf.stringToHclTerraform(this._ipsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_begin: {
        value: cdktf.booleanToHclTerraform(this._logBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_end: {
        value: cdktf.booleanToHclTerraform(this._logEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_files: {
        value: cdktf.booleanToHclTerraform(this._logFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_comments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._newComments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      section: {
        value: cdktf.stringToHclTerraform(this._section),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_events_to_fmc: {
        value: cdktf.booleanToHclTerraform(this._sendEventsToFmc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog_config: {
        value: cdktf.stringToHclTerraform(this._syslogConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_severity: {
        value: cdktf.stringToHclTerraform(this._syslogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_dynamic_objects: {
        value: accessRulesDestinationDynamicObjectsToHclTerraform(this._destinationDynamicObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesDestinationDynamicObjectsList",
      },
      destination_networks: {
        value: accessRulesDestinationNetworksToHclTerraform(this._destinationNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesDestinationNetworksList",
      },
      destination_ports: {
        value: accessRulesDestinationPortsToHclTerraform(this._destinationPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesDestinationPortsList",
      },
      destination_security_group_tags: {
        value: accessRulesDestinationSecurityGroupTagsToHclTerraform(this._destinationSecurityGroupTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesDestinationSecurityGroupTagsList",
      },
      destination_zones: {
        value: accessRulesDestinationZonesToHclTerraform(this._destinationZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesDestinationZonesList",
      },
      source_dynamic_objects: {
        value: accessRulesSourceDynamicObjectsToHclTerraform(this._sourceDynamicObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesSourceDynamicObjectsList",
      },
      source_networks: {
        value: accessRulesSourceNetworksToHclTerraform(this._sourceNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesSourceNetworksList",
      },
      source_ports: {
        value: accessRulesSourcePortsToHclTerraform(this._sourcePorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesSourcePortsList",
      },
      source_security_group_tags: {
        value: accessRulesSourceSecurityGroupTagsToHclTerraform(this._sourceSecurityGroupTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesSourceSecurityGroupTagsList",
      },
      source_zones: {
        value: accessRulesSourceZonesToHclTerraform(this._sourceZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesSourceZonesList",
      },
      urls: {
        value: accessRulesUrlsToHclTerraform(this._urls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessRulesUrlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalizedPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 application visibility
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#application_visibility_ipv4 LocalizedPolicy#application_visibility_ipv4}
  */
  readonly applicationVisibilityIpv4?: boolean | cdktf.IResolvable;
  /**
  * IPv6 application visibility
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#application_visibility_ipv6 LocalizedPolicy#application_visibility_ipv6}
  */
  readonly applicationVisibilityIpv6?: boolean | cdktf.IResolvable;
  /**
  * Cloud QoS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#cloud_qos LocalizedPolicy#cloud_qos}
  */
  readonly cloudQos?: boolean | cdktf.IResolvable;
  /**
  * Cloud QoS service side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#cloud_qos_service_side LocalizedPolicy#cloud_qos_service_side}
  */
  readonly cloudQosServiceSide?: boolean | cdktf.IResolvable;
  /**
  * List of policy definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#definitions LocalizedPolicy#definitions}
  */
  readonly definitions?: LocalizedPolicyDefinitions[] | cdktf.IResolvable;
  /**
  * The description of the localized policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#description LocalizedPolicy#description}
  */
  readonly description: string;
  /**
  * IPv4 flow visibility
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#flow_visibility_ipv4 LocalizedPolicy#flow_visibility_ipv4}
  */
  readonly flowVisibilityIpv4?: boolean | cdktf.IResolvable;
  /**
  * IPv6 flow visibility
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#flow_visibility_ipv6 LocalizedPolicy#flow_visibility_ipv6}
  */
  readonly flowVisibilityIpv6?: boolean | cdktf.IResolvable;
  /**
  * Implicit ACL logging
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#implicit_acl_logging LocalizedPolicy#implicit_acl_logging}
  */
  readonly implicitAclLogging?: boolean | cdktf.IResolvable;
  /**
  * IPv4 visibility cache entries
  *   - Range: `16`-`2000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#ipv4_visibility_cache_entries LocalizedPolicy#ipv4_visibility_cache_entries}
  */
  readonly ipv4VisibilityCacheEntries?: number;
  /**
  * IPv6 visibility cache entries
  *   - Range: `16`-`2000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#ipv6_visibility_cache_entries LocalizedPolicy#ipv6_visibility_cache_entries}
  */
  readonly ipv6VisibilityCacheEntries?: number;
  /**
  * Log frequency
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#log_frequency LocalizedPolicy#log_frequency}
  */
  readonly logFrequency?: number;
  /**
  * The name of the localized policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#name LocalizedPolicy#name}
  */
  readonly name: string;
}
export interface LocalizedPolicyDefinitions {
  /**
  * Policy definition ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#id LocalizedPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Policy definition type
  *   - Choices: `qosMap`, `rewriteRule`, `vedgeRoute`, `acl`, `aclv6`, `deviceAccessPolicy`, `deviceAccessPolicyv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#type LocalizedPolicy#type}
  */
  readonly type: string;
  /**
  * Policy definition version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#version LocalizedPolicy#version}
  */
  readonly version?: number;
}

export function localizedPolicyDefinitionsToTerraform(struct?: LocalizedPolicyDefinitions | cdktf.IResolvable): any {
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


export function localizedPolicyDefinitionsToHclTerraform(struct?: LocalizedPolicyDefinitions | cdktf.IResolvable): any {
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

export class LocalizedPolicyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocalizedPolicyDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LocalizedPolicyDefinitions | cdktf.IResolvable | undefined) {
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

export class LocalizedPolicyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : LocalizedPolicyDefinitions[] | cdktf.IResolvable

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
  public get(index: number): LocalizedPolicyDefinitionsOutputReference {
    return new LocalizedPolicyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy sdwan_localized_policy}
*/
export class LocalizedPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_localized_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalizedPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalizedPolicy to import
  * @param importFromId The id of the existing LocalizedPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalizedPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_localized_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/localized_policy sdwan_localized_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalizedPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LocalizedPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_localized_policy',
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
    this._applicationVisibilityIpv4 = config.applicationVisibilityIpv4;
    this._applicationVisibilityIpv6 = config.applicationVisibilityIpv6;
    this._cloudQos = config.cloudQos;
    this._cloudQosServiceSide = config.cloudQosServiceSide;
    this._definitions.internalValue = config.definitions;
    this._description = config.description;
    this._flowVisibilityIpv4 = config.flowVisibilityIpv4;
    this._flowVisibilityIpv6 = config.flowVisibilityIpv6;
    this._implicitAclLogging = config.implicitAclLogging;
    this._ipv4VisibilityCacheEntries = config.ipv4VisibilityCacheEntries;
    this._ipv6VisibilityCacheEntries = config.ipv6VisibilityCacheEntries;
    this._logFrequency = config.logFrequency;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_visibility_ipv4 - computed: true, optional: true, required: false
  private _applicationVisibilityIpv4?: boolean | cdktf.IResolvable; 
  public get applicationVisibilityIpv4() {
    return this.getBooleanAttribute('application_visibility_ipv4');
  }
  public set applicationVisibilityIpv4(value: boolean | cdktf.IResolvable) {
    this._applicationVisibilityIpv4 = value;
  }
  public resetApplicationVisibilityIpv4() {
    this._applicationVisibilityIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationVisibilityIpv4Input() {
    return this._applicationVisibilityIpv4;
  }

  // application_visibility_ipv6 - computed: true, optional: true, required: false
  private _applicationVisibilityIpv6?: boolean | cdktf.IResolvable; 
  public get applicationVisibilityIpv6() {
    return this.getBooleanAttribute('application_visibility_ipv6');
  }
  public set applicationVisibilityIpv6(value: boolean | cdktf.IResolvable) {
    this._applicationVisibilityIpv6 = value;
  }
  public resetApplicationVisibilityIpv6() {
    this._applicationVisibilityIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationVisibilityIpv6Input() {
    return this._applicationVisibilityIpv6;
  }

  // cloud_qos - computed: false, optional: true, required: false
  private _cloudQos?: boolean | cdktf.IResolvable; 
  public get cloudQos() {
    return this.getBooleanAttribute('cloud_qos');
  }
  public set cloudQos(value: boolean | cdktf.IResolvable) {
    this._cloudQos = value;
  }
  public resetCloudQos() {
    this._cloudQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudQosInput() {
    return this._cloudQos;
  }

  // cloud_qos_service_side - computed: false, optional: true, required: false
  private _cloudQosServiceSide?: boolean | cdktf.IResolvable; 
  public get cloudQosServiceSide() {
    return this.getBooleanAttribute('cloud_qos_service_side');
  }
  public set cloudQosServiceSide(value: boolean | cdktf.IResolvable) {
    this._cloudQosServiceSide = value;
  }
  public resetCloudQosServiceSide() {
    this._cloudQosServiceSide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudQosServiceSideInput() {
    return this._cloudQosServiceSide;
  }

  // definitions - computed: false, optional: true, required: false
  private _definitions = new LocalizedPolicyDefinitionsList(this, "definitions", true);
  public get definitions() {
    return this._definitions;
  }
  public putDefinitions(value: LocalizedPolicyDefinitions[] | cdktf.IResolvable) {
    this._definitions.internalValue = value;
  }
  public resetDefinitions() {
    this._definitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionsInput() {
    return this._definitions.internalValue;
  }

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

  // flow_visibility_ipv4 - computed: true, optional: true, required: false
  private _flowVisibilityIpv4?: boolean | cdktf.IResolvable; 
  public get flowVisibilityIpv4() {
    return this.getBooleanAttribute('flow_visibility_ipv4');
  }
  public set flowVisibilityIpv4(value: boolean | cdktf.IResolvable) {
    this._flowVisibilityIpv4 = value;
  }
  public resetFlowVisibilityIpv4() {
    this._flowVisibilityIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowVisibilityIpv4Input() {
    return this._flowVisibilityIpv4;
  }

  // flow_visibility_ipv6 - computed: true, optional: true, required: false
  private _flowVisibilityIpv6?: boolean | cdktf.IResolvable; 
  public get flowVisibilityIpv6() {
    return this.getBooleanAttribute('flow_visibility_ipv6');
  }
  public set flowVisibilityIpv6(value: boolean | cdktf.IResolvable) {
    this._flowVisibilityIpv6 = value;
  }
  public resetFlowVisibilityIpv6() {
    this._flowVisibilityIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowVisibilityIpv6Input() {
    return this._flowVisibilityIpv6;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // implicit_acl_logging - computed: true, optional: true, required: false
  private _implicitAclLogging?: boolean | cdktf.IResolvable; 
  public get implicitAclLogging() {
    return this.getBooleanAttribute('implicit_acl_logging');
  }
  public set implicitAclLogging(value: boolean | cdktf.IResolvable) {
    this._implicitAclLogging = value;
  }
  public resetImplicitAclLogging() {
    this._implicitAclLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitAclLoggingInput() {
    return this._implicitAclLogging;
  }

  // ipv4_visibility_cache_entries - computed: false, optional: true, required: false
  private _ipv4VisibilityCacheEntries?: number; 
  public get ipv4VisibilityCacheEntries() {
    return this.getNumberAttribute('ipv4_visibility_cache_entries');
  }
  public set ipv4VisibilityCacheEntries(value: number) {
    this._ipv4VisibilityCacheEntries = value;
  }
  public resetIpv4VisibilityCacheEntries() {
    this._ipv4VisibilityCacheEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VisibilityCacheEntriesInput() {
    return this._ipv4VisibilityCacheEntries;
  }

  // ipv6_visibility_cache_entries - computed: false, optional: true, required: false
  private _ipv6VisibilityCacheEntries?: number; 
  public get ipv6VisibilityCacheEntries() {
    return this.getNumberAttribute('ipv6_visibility_cache_entries');
  }
  public set ipv6VisibilityCacheEntries(value: number) {
    this._ipv6VisibilityCacheEntries = value;
  }
  public resetIpv6VisibilityCacheEntries() {
    this._ipv6VisibilityCacheEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VisibilityCacheEntriesInput() {
    return this._ipv6VisibilityCacheEntries;
  }

  // log_frequency - computed: false, optional: true, required: false
  private _logFrequency?: number; 
  public get logFrequency() {
    return this.getNumberAttribute('log_frequency');
  }
  public set logFrequency(value: number) {
    this._logFrequency = value;
  }
  public resetLogFrequency() {
    this._logFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFrequencyInput() {
    return this._logFrequency;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_visibility_ipv4: cdktf.booleanToTerraform(this._applicationVisibilityIpv4),
      application_visibility_ipv6: cdktf.booleanToTerraform(this._applicationVisibilityIpv6),
      cloud_qos: cdktf.booleanToTerraform(this._cloudQos),
      cloud_qos_service_side: cdktf.booleanToTerraform(this._cloudQosServiceSide),
      definitions: cdktf.listMapper(localizedPolicyDefinitionsToTerraform, false)(this._definitions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      flow_visibility_ipv4: cdktf.booleanToTerraform(this._flowVisibilityIpv4),
      flow_visibility_ipv6: cdktf.booleanToTerraform(this._flowVisibilityIpv6),
      implicit_acl_logging: cdktf.booleanToTerraform(this._implicitAclLogging),
      ipv4_visibility_cache_entries: cdktf.numberToTerraform(this._ipv4VisibilityCacheEntries),
      ipv6_visibility_cache_entries: cdktf.numberToTerraform(this._ipv6VisibilityCacheEntries),
      log_frequency: cdktf.numberToTerraform(this._logFrequency),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_visibility_ipv4: {
        value: cdktf.booleanToHclTerraform(this._applicationVisibilityIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_visibility_ipv6: {
        value: cdktf.booleanToHclTerraform(this._applicationVisibilityIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_qos: {
        value: cdktf.booleanToHclTerraform(this._cloudQos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_qos_service_side: {
        value: cdktf.booleanToHclTerraform(this._cloudQosServiceSide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      definitions: {
        value: cdktf.listMapperHcl(localizedPolicyDefinitionsToHclTerraform, false)(this._definitions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LocalizedPolicyDefinitionsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_visibility_ipv4: {
        value: cdktf.booleanToHclTerraform(this._flowVisibilityIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flow_visibility_ipv6: {
        value: cdktf.booleanToHclTerraform(this._flowVisibilityIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      implicit_acl_logging: {
        value: cdktf.booleanToHclTerraform(this._implicitAclLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_visibility_cache_entries: {
        value: cdktf.numberToHclTerraform(this._ipv4VisibilityCacheEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_visibility_cache_entries: {
        value: cdktf.numberToHclTerraform(this._ipv6VisibilityCacheEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_frequency: {
        value: cdktf.numberToHclTerraform(this._logFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

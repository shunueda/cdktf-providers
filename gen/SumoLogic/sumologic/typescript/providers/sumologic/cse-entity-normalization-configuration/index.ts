// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseEntityNormalizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#aws_normalization_enabled CseEntityNormalizationConfiguration#aws_normalization_enabled}
  */
  readonly awsNormalizationEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#default_normalized_domain CseEntityNormalizationConfiguration#default_normalized_domain}
  */
  readonly defaultNormalizedDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#fqdn_normalization_enabled CseEntityNormalizationConfiguration#fqdn_normalization_enabled}
  */
  readonly fqdnNormalizationEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#id CseEntityNormalizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#normalize_hostnames CseEntityNormalizationConfiguration#normalize_hostnames}
  */
  readonly normalizeHostnames: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#normalize_usernames CseEntityNormalizationConfiguration#normalize_usernames}
  */
  readonly normalizeUsernames: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#windows_normalization_enabled CseEntityNormalizationConfiguration#windows_normalization_enabled}
  */
  readonly windowsNormalizationEnabled: boolean | cdktf.IResolvable;
  /**
  * domain_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#domain_mappings CseEntityNormalizationConfiguration#domain_mappings}
  */
  readonly domainMappings: CseEntityNormalizationConfigurationDomainMappings[] | cdktf.IResolvable;
}
export interface CseEntityNormalizationConfigurationDomainMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#normalized_domain CseEntityNormalizationConfiguration#normalized_domain}
  */
  readonly normalizedDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#raw_domain CseEntityNormalizationConfiguration#raw_domain}
  */
  readonly rawDomain: string;
}

export function cseEntityNormalizationConfigurationDomainMappingsToTerraform(struct?: CseEntityNormalizationConfigurationDomainMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normalized_domain: cdktf.stringToTerraform(struct!.normalizedDomain),
    raw_domain: cdktf.stringToTerraform(struct!.rawDomain),
  }
}


export function cseEntityNormalizationConfigurationDomainMappingsToHclTerraform(struct?: CseEntityNormalizationConfigurationDomainMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normalized_domain: {
      value: cdktf.stringToHclTerraform(struct!.normalizedDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_domain: {
      value: cdktf.stringToHclTerraform(struct!.rawDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseEntityNormalizationConfigurationDomainMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseEntityNormalizationConfigurationDomainMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._normalizedDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizedDomain = this._normalizedDomain;
    }
    if (this._rawDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawDomain = this._rawDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseEntityNormalizationConfigurationDomainMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._normalizedDomain = undefined;
      this._rawDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._normalizedDomain = value.normalizedDomain;
      this._rawDomain = value.rawDomain;
    }
  }

  // normalized_domain - computed: false, optional: false, required: true
  private _normalizedDomain?: string; 
  public get normalizedDomain() {
    return this.getStringAttribute('normalized_domain');
  }
  public set normalizedDomain(value: string) {
    this._normalizedDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizedDomainInput() {
    return this._normalizedDomain;
  }

  // raw_domain - computed: false, optional: false, required: true
  private _rawDomain?: string; 
  public get rawDomain() {
    return this.getStringAttribute('raw_domain');
  }
  public set rawDomain(value: string) {
    this._rawDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDomainInput() {
    return this._rawDomain;
  }
}

export class CseEntityNormalizationConfigurationDomainMappingsList extends cdktf.ComplexList {
  public internalValue? : CseEntityNormalizationConfigurationDomainMappings[] | cdktf.IResolvable

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
  public get(index: number): CseEntityNormalizationConfigurationDomainMappingsOutputReference {
    return new CseEntityNormalizationConfigurationDomainMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration sumologic_cse_entity_normalization_configuration}
*/
export class CseEntityNormalizationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_entity_normalization_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseEntityNormalizationConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseEntityNormalizationConfiguration to import
  * @param importFromId The id of the existing CseEntityNormalizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseEntityNormalizationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_entity_normalization_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_entity_normalization_configuration sumologic_cse_entity_normalization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseEntityNormalizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CseEntityNormalizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_entity_normalization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsNormalizationEnabled = config.awsNormalizationEnabled;
    this._defaultNormalizedDomain = config.defaultNormalizedDomain;
    this._fqdnNormalizationEnabled = config.fqdnNormalizationEnabled;
    this._id = config.id;
    this._normalizeHostnames = config.normalizeHostnames;
    this._normalizeUsernames = config.normalizeUsernames;
    this._windowsNormalizationEnabled = config.windowsNormalizationEnabled;
    this._domainMappings.internalValue = config.domainMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_normalization_enabled - computed: false, optional: false, required: true
  private _awsNormalizationEnabled?: boolean | cdktf.IResolvable; 
  public get awsNormalizationEnabled() {
    return this.getBooleanAttribute('aws_normalization_enabled');
  }
  public set awsNormalizationEnabled(value: boolean | cdktf.IResolvable) {
    this._awsNormalizationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNormalizationEnabledInput() {
    return this._awsNormalizationEnabled;
  }

  // default_normalized_domain - computed: false, optional: true, required: false
  private _defaultNormalizedDomain?: string; 
  public get defaultNormalizedDomain() {
    return this.getStringAttribute('default_normalized_domain');
  }
  public set defaultNormalizedDomain(value: string) {
    this._defaultNormalizedDomain = value;
  }
  public resetDefaultNormalizedDomain() {
    this._defaultNormalizedDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNormalizedDomainInput() {
    return this._defaultNormalizedDomain;
  }

  // fqdn_normalization_enabled - computed: false, optional: false, required: true
  private _fqdnNormalizationEnabled?: boolean | cdktf.IResolvable; 
  public get fqdnNormalizationEnabled() {
    return this.getBooleanAttribute('fqdn_normalization_enabled');
  }
  public set fqdnNormalizationEnabled(value: boolean | cdktf.IResolvable) {
    this._fqdnNormalizationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNormalizationEnabledInput() {
    return this._fqdnNormalizationEnabled;
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

  // normalize_hostnames - computed: false, optional: false, required: true
  private _normalizeHostnames?: boolean | cdktf.IResolvable; 
  public get normalizeHostnames() {
    return this.getBooleanAttribute('normalize_hostnames');
  }
  public set normalizeHostnames(value: boolean | cdktf.IResolvable) {
    this._normalizeHostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeHostnamesInput() {
    return this._normalizeHostnames;
  }

  // normalize_usernames - computed: false, optional: false, required: true
  private _normalizeUsernames?: boolean | cdktf.IResolvable; 
  public get normalizeUsernames() {
    return this.getBooleanAttribute('normalize_usernames');
  }
  public set normalizeUsernames(value: boolean | cdktf.IResolvable) {
    this._normalizeUsernames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeUsernamesInput() {
    return this._normalizeUsernames;
  }

  // windows_normalization_enabled - computed: false, optional: false, required: true
  private _windowsNormalizationEnabled?: boolean | cdktf.IResolvable; 
  public get windowsNormalizationEnabled() {
    return this.getBooleanAttribute('windows_normalization_enabled');
  }
  public set windowsNormalizationEnabled(value: boolean | cdktf.IResolvable) {
    this._windowsNormalizationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNormalizationEnabledInput() {
    return this._windowsNormalizationEnabled;
  }

  // domain_mappings - computed: false, optional: false, required: true
  private _domainMappings = new CseEntityNormalizationConfigurationDomainMappingsList(this, "domain_mappings", false);
  public get domainMappings() {
    return this._domainMappings;
  }
  public putDomainMappings(value: CseEntityNormalizationConfigurationDomainMappings[] | cdktf.IResolvable) {
    this._domainMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMappingsInput() {
    return this._domainMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_normalization_enabled: cdktf.booleanToTerraform(this._awsNormalizationEnabled),
      default_normalized_domain: cdktf.stringToTerraform(this._defaultNormalizedDomain),
      fqdn_normalization_enabled: cdktf.booleanToTerraform(this._fqdnNormalizationEnabled),
      id: cdktf.stringToTerraform(this._id),
      normalize_hostnames: cdktf.booleanToTerraform(this._normalizeHostnames),
      normalize_usernames: cdktf.booleanToTerraform(this._normalizeUsernames),
      windows_normalization_enabled: cdktf.booleanToTerraform(this._windowsNormalizationEnabled),
      domain_mappings: cdktf.listMapper(cseEntityNormalizationConfigurationDomainMappingsToTerraform, true)(this._domainMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_normalization_enabled: {
        value: cdktf.booleanToHclTerraform(this._awsNormalizationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_normalized_domain: {
        value: cdktf.stringToHclTerraform(this._defaultNormalizedDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_normalization_enabled: {
        value: cdktf.booleanToHclTerraform(this._fqdnNormalizationEnabled),
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
      normalize_hostnames: {
        value: cdktf.booleanToHclTerraform(this._normalizeHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      normalize_usernames: {
        value: cdktf.booleanToHclTerraform(this._normalizeUsernames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      windows_normalization_enabled: {
        value: cdktf.booleanToHclTerraform(this._windowsNormalizationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_mappings: {
        value: cdktf.listMapperHcl(cseEntityNormalizationConfigurationDomainMappingsToHclTerraform, true)(this._domainMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseEntityNormalizationConfigurationDomainMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

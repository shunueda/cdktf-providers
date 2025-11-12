// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultScimResourceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies an auxiliary LDAP object class that should be exposed by this SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#auxiliary_ldap_objectclass DefaultScimResourceType#auxiliary_ldap_objectclass}
  */
  readonly auxiliaryLdapObjectclass?: string[];
  /**
  * The core schema enforced on core attributes at the top level of a SCIM resource representation exposed by thisMapping SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#core_schema DefaultScimResourceType#core_schema}
  */
  readonly coreSchema?: string;
  /**
  * Specifies the template to use for the DN when creating new entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#create_dn_pattern DefaultScimResourceType#create_dn_pattern}
  */
  readonly createDnPattern?: string;
  /**
  * A description for this SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#description DefaultScimResourceType#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the SCIM Resource Type is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#enabled DefaultScimResourceType#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The HTTP addressable endpoint of this SCIM Resource Type relative to the '/scim/v2' base URL. Do not include a leading '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#endpoint DefaultScimResourceType#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Specifies the primary attribute to use as the value for the SCIM object ID. The object ID should be a unique, immutable identifier for fetch, update and delete operations on an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#id_attribute DefaultScimResourceType#id_attribute}
  */
  readonly idAttribute?: string;
  /**
  * Specifies the base DN of the branch of the LDAP directory that can be accessed by this SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#include_base_dn DefaultScimResourceType#include_base_dn}
  */
  readonly includeBaseDn?: string;
  /**
  * The set of LDAP filters that define the LDAP entries that should be included in this SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#include_filter DefaultScimResourceType#include_filter}
  */
  readonly includeFilter?: string[];
  /**
  * Specifies the set of operational LDAP attributes to be provided by this SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#include_operational_attribute DefaultScimResourceType#include_operational_attribute}
  */
  readonly includeOperationalAttribute?: string[];
  /**
  * The maximum number of resources that the SCIM Resource Type should "look through" in the course of processing a search request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#lookthrough_limit DefaultScimResourceType#lookthrough_limit}
  */
  readonly lookthroughLimit?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#name DefaultScimResourceType#name}
  */
  readonly name: string;
  /**
  * Optional additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#optional_schema_extension DefaultScimResourceType#optional_schema_extension}
  */
  readonly optionalSchemaExtension?: string[];
  /**
  * Required additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#required_schema_extension DefaultScimResourceType#required_schema_extension}
  */
  readonly requiredSchemaExtension?: string[];
  /**
  * Options to alter the way schema checking is performed during create or modify requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#schema_checking_option DefaultScimResourceType#schema_checking_option}
  */
  readonly schemaCheckingOption?: string[];
  /**
  * Specifies the LDAP structural object class that should be exposed by this SCIM Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#structural_ldap_objectclass DefaultScimResourceType#structural_ldap_objectclass}
  */
  readonly structuralLdapObjectclass?: string;
}
export interface DefaultScimResourceTypeRequiredActions {
}

export function defaultScimResourceTypeRequiredActionsToTerraform(struct?: DefaultScimResourceTypeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultScimResourceTypeRequiredActionsToHclTerraform(struct?: DefaultScimResourceTypeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultScimResourceTypeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultScimResourceTypeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultScimResourceTypeRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultScimResourceTypeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultScimResourceTypeRequiredActionsOutputReference {
    return new DefaultScimResourceTypeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type pingdirectory_default_scim_resource_type}
*/
export class DefaultScimResourceType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_scim_resource_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultScimResourceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultScimResourceType to import
  * @param importFromId The id of the existing DefaultScimResourceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultScimResourceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_scim_resource_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_scim_resource_type pingdirectory_default_scim_resource_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultScimResourceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultScimResourceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_scim_resource_type',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
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
    this._auxiliaryLdapObjectclass = config.auxiliaryLdapObjectclass;
    this._coreSchema = config.coreSchema;
    this._createDnPattern = config.createDnPattern;
    this._description = config.description;
    this._enabled = config.enabled;
    this._endpoint = config.endpoint;
    this._idAttribute = config.idAttribute;
    this._includeBaseDn = config.includeBaseDn;
    this._includeFilter = config.includeFilter;
    this._includeOperationalAttribute = config.includeOperationalAttribute;
    this._lookthroughLimit = config.lookthroughLimit;
    this._name = config.name;
    this._optionalSchemaExtension = config.optionalSchemaExtension;
    this._requiredSchemaExtension = config.requiredSchemaExtension;
    this._schemaCheckingOption = config.schemaCheckingOption;
    this._structuralLdapObjectclass = config.structuralLdapObjectclass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_ldap_objectclass - computed: true, optional: true, required: false
  private _auxiliaryLdapObjectclass?: string[]; 
  public get auxiliaryLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_ldap_objectclass'));
  }
  public set auxiliaryLdapObjectclass(value: string[]) {
    this._auxiliaryLdapObjectclass = value;
  }
  public resetAuxiliaryLdapObjectclass() {
    this._auxiliaryLdapObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryLdapObjectclassInput() {
    return this._auxiliaryLdapObjectclass;
  }

  // core_schema - computed: true, optional: true, required: false
  private _coreSchema?: string; 
  public get coreSchema() {
    return this.getStringAttribute('core_schema');
  }
  public set coreSchema(value: string) {
    this._coreSchema = value;
  }
  public resetCoreSchema() {
    this._coreSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSchemaInput() {
    return this._coreSchema;
  }

  // create_dn_pattern - computed: true, optional: true, required: false
  private _createDnPattern?: string; 
  public get createDnPattern() {
    return this.getStringAttribute('create_dn_pattern');
  }
  public set createDnPattern(value: string) {
    this._createDnPattern = value;
  }
  public resetCreateDnPattern() {
    this._createDnPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDnPatternInput() {
    return this._createDnPattern;
  }

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_attribute - computed: true, optional: true, required: false
  private _idAttribute?: string; 
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }
  public set idAttribute(value: string) {
    this._idAttribute = value;
  }
  public resetIdAttribute() {
    this._idAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idAttributeInput() {
    return this._idAttribute;
  }

  // include_base_dn - computed: true, optional: true, required: false
  private _includeBaseDn?: string; 
  public get includeBaseDn() {
    return this.getStringAttribute('include_base_dn');
  }
  public set includeBaseDn(value: string) {
    this._includeBaseDn = value;
  }
  public resetIncludeBaseDn() {
    this._includeBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBaseDnInput() {
    return this._includeBaseDn;
  }

  // include_filter - computed: true, optional: true, required: false
  private _includeFilter?: string[]; 
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }
  public set includeFilter(value: string[]) {
    this._includeFilter = value;
  }
  public resetIncludeFilter() {
    this._includeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter;
  }

  // include_operational_attribute - computed: true, optional: true, required: false
  private _includeOperationalAttribute?: string[]; 
  public get includeOperationalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('include_operational_attribute'));
  }
  public set includeOperationalAttribute(value: string[]) {
    this._includeOperationalAttribute = value;
  }
  public resetIncludeOperationalAttribute() {
    this._includeOperationalAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOperationalAttributeInput() {
    return this._includeOperationalAttribute;
  }

  // lookthrough_limit - computed: true, optional: true, required: false
  private _lookthroughLimit?: number; 
  public get lookthroughLimit() {
    return this.getNumberAttribute('lookthrough_limit');
  }
  public set lookthroughLimit(value: number) {
    this._lookthroughLimit = value;
  }
  public resetLookthroughLimit() {
    this._lookthroughLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookthroughLimitInput() {
    return this._lookthroughLimit;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // optional_schema_extension - computed: true, optional: true, required: false
  private _optionalSchemaExtension?: string[]; 
  public get optionalSchemaExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_schema_extension'));
  }
  public set optionalSchemaExtension(value: string[]) {
    this._optionalSchemaExtension = value;
  }
  public resetOptionalSchemaExtension() {
    this._optionalSchemaExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSchemaExtensionInput() {
    return this._optionalSchemaExtension;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultScimResourceTypeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // required_schema_extension - computed: true, optional: true, required: false
  private _requiredSchemaExtension?: string[]; 
  public get requiredSchemaExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('required_schema_extension'));
  }
  public set requiredSchemaExtension(value: string[]) {
    this._requiredSchemaExtension = value;
  }
  public resetRequiredSchemaExtension() {
    this._requiredSchemaExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredSchemaExtensionInput() {
    return this._requiredSchemaExtension;
  }

  // schema_checking_option - computed: true, optional: true, required: false
  private _schemaCheckingOption?: string[]; 
  public get schemaCheckingOption() {
    return cdktf.Fn.tolist(this.getListAttribute('schema_checking_option'));
  }
  public set schemaCheckingOption(value: string[]) {
    this._schemaCheckingOption = value;
  }
  public resetSchemaCheckingOption() {
    this._schemaCheckingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaCheckingOptionInput() {
    return this._schemaCheckingOption;
  }

  // structural_ldap_objectclass - computed: true, optional: true, required: false
  private _structuralLdapObjectclass?: string; 
  public get structuralLdapObjectclass() {
    return this.getStringAttribute('structural_ldap_objectclass');
  }
  public set structuralLdapObjectclass(value: string) {
    this._structuralLdapObjectclass = value;
  }
  public resetStructuralLdapObjectclass() {
    this._structuralLdapObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuralLdapObjectclassInput() {
    return this._structuralLdapObjectclass;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auxiliary_ldap_objectclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auxiliaryLdapObjectclass),
      core_schema: cdktf.stringToTerraform(this._coreSchema),
      create_dn_pattern: cdktf.stringToTerraform(this._createDnPattern),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id_attribute: cdktf.stringToTerraform(this._idAttribute),
      include_base_dn: cdktf.stringToTerraform(this._includeBaseDn),
      include_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeFilter),
      include_operational_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeOperationalAttribute),
      lookthrough_limit: cdktf.numberToTerraform(this._lookthroughLimit),
      name: cdktf.stringToTerraform(this._name),
      optional_schema_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optionalSchemaExtension),
      required_schema_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requiredSchemaExtension),
      schema_checking_option: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaCheckingOption),
      structural_ldap_objectclass: cdktf.stringToTerraform(this._structuralLdapObjectclass),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auxiliary_ldap_objectclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auxiliaryLdapObjectclass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      core_schema: {
        value: cdktf.stringToHclTerraform(this._coreSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_dn_pattern: {
        value: cdktf.stringToHclTerraform(this._createDnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_attribute: {
        value: cdktf.stringToHclTerraform(this._idAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_base_dn: {
        value: cdktf.stringToHclTerraform(this._includeBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_operational_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeOperationalAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lookthrough_limit: {
        value: cdktf.numberToHclTerraform(this._lookthroughLimit),
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
      optional_schema_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optionalSchemaExtension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      required_schema_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requiredSchemaExtension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      schema_checking_option: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaCheckingOption),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      structural_ldap_objectclass: {
        value: cdktf.stringToHclTerraform(this._structuralLdapObjectclass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

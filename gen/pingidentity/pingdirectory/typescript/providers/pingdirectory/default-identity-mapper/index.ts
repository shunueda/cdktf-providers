// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultIdentityMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of identity mappers that must all match the target entry. Each identity mapper must uniquely match the same target entry. If any of the identity mappers match multiple entries, if any of them match zero entries, or if any of them match different entries, then the mapping will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#all_included_identity_mapper DefaultIdentityMapper#all_included_identity_mapper}
  */
  readonly allIncludedIdentityMapper?: string[];
  /**
  * The set of identity mappers that will be used to identify the target entry. At least one identity mapper must uniquely match an entry. If multiple identity mappers match entries, then they must all uniquely match the same entry. If none of the identity mappers match any entries, if any of them match multiple entries, or if any of them match different entries, then the mapping will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#any_included_identity_mapper DefaultIdentityMapper#any_included_identity_mapper}
  */
  readonly anyIncludedIdentityMapper?: string[];
  /**
  * A description for this Identity Mapper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#description DefaultIdentityMapper#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Identity Mapper is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#enabled DefaultIdentityMapper#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Identity Mapper. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#extension_argument DefaultIdentityMapper#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Identity Mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#extension_class DefaultIdentityMapper#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * When the `type` attribute is set to:
  *   - `exact-match`: Specifies the attribute whose value should exactly match the ID string provided to this identity mapper.
  *   - `regular-expression`: Specifies the name or OID of the attribute whose value should match the provided identifier string after it has been processed by the associated regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#match_attribute DefaultIdentityMapper#match_attribute}
  */
  readonly matchAttribute?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `exact-match`: Specifies the set of base DNs below which to search for users.
  *   - `regular-expression`: Specifies the base DN(s) that should be used when performing searches to map the provided ID string to a user entry. If multiple values are given, searches are performed below all the specified base DNs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#match_base_dn DefaultIdentityMapper#match_base_dn}
  */
  readonly matchBaseDn?: string[];
  /**
  * An optional filter that mapped users must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#match_filter DefaultIdentityMapper#match_filter}
  */
  readonly matchFilter?: string;
  /**
  * Specifies the regular expression pattern that is used to identify portions of the ID string that will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#match_pattern DefaultIdentityMapper#match_pattern}
  */
  readonly matchPattern?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#name DefaultIdentityMapper#name}
  */
  readonly name: string;
  /**
  * Specifies the replacement pattern that should be used for substrings in the ID string that match the provided regular expression pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#replace_pattern DefaultIdentityMapper#replace_pattern}
  */
  readonly replacePattern?: string;
  /**
  * The set of arguments used to customize the behavior for the Scripted Identity Mapper. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#script_argument DefaultIdentityMapper#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Identity Mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#script_class DefaultIdentityMapper#script_class}
  */
  readonly scriptClass?: string;
}
export interface DefaultIdentityMapperRequiredActions {
}

export function defaultIdentityMapperRequiredActionsToTerraform(struct?: DefaultIdentityMapperRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultIdentityMapperRequiredActionsToHclTerraform(struct?: DefaultIdentityMapperRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultIdentityMapperRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultIdentityMapperRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultIdentityMapperRequiredActions | undefined) {
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

export class DefaultIdentityMapperRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultIdentityMapperRequiredActionsOutputReference {
    return new DefaultIdentityMapperRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper pingdirectory_default_identity_mapper}
*/
export class DefaultIdentityMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_identity_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultIdentityMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultIdentityMapper to import
  * @param importFromId The id of the existing DefaultIdentityMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultIdentityMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_identity_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_identity_mapper pingdirectory_default_identity_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultIdentityMapperConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultIdentityMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_identity_mapper',
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
    this._allIncludedIdentityMapper = config.allIncludedIdentityMapper;
    this._anyIncludedIdentityMapper = config.anyIncludedIdentityMapper;
    this._description = config.description;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._matchAttribute = config.matchAttribute;
    this._matchBaseDn = config.matchBaseDn;
    this._matchFilter = config.matchFilter;
    this._matchPattern = config.matchPattern;
    this._name = config.name;
    this._replacePattern = config.replacePattern;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_identity_mapper - computed: true, optional: true, required: false
  private _allIncludedIdentityMapper?: string[]; 
  public get allIncludedIdentityMapper() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_identity_mapper'));
  }
  public set allIncludedIdentityMapper(value: string[]) {
    this._allIncludedIdentityMapper = value;
  }
  public resetAllIncludedIdentityMapper() {
    this._allIncludedIdentityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIncludedIdentityMapperInput() {
    return this._allIncludedIdentityMapper;
  }

  // any_included_identity_mapper - computed: true, optional: true, required: false
  private _anyIncludedIdentityMapper?: string[]; 
  public get anyIncludedIdentityMapper() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_identity_mapper'));
  }
  public set anyIncludedIdentityMapper(value: string[]) {
    this._anyIncludedIdentityMapper = value;
  }
  public resetAnyIncludedIdentityMapper() {
    this._anyIncludedIdentityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIncludedIdentityMapperInput() {
    return this._anyIncludedIdentityMapper;
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

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: true, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_attribute - computed: true, optional: true, required: false
  private _matchAttribute?: string[]; 
  public get matchAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('match_attribute'));
  }
  public set matchAttribute(value: string[]) {
    this._matchAttribute = value;
  }
  public resetMatchAttribute() {
    this._matchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAttributeInput() {
    return this._matchAttribute;
  }

  // match_base_dn - computed: true, optional: true, required: false
  private _matchBaseDn?: string[]; 
  public get matchBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('match_base_dn'));
  }
  public set matchBaseDn(value: string[]) {
    this._matchBaseDn = value;
  }
  public resetMatchBaseDn() {
    this._matchBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBaseDnInput() {
    return this._matchBaseDn;
  }

  // match_filter - computed: true, optional: true, required: false
  private _matchFilter?: string; 
  public get matchFilter() {
    return this.getStringAttribute('match_filter');
  }
  public set matchFilter(value: string) {
    this._matchFilter = value;
  }
  public resetMatchFilter() {
    this._matchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFilterInput() {
    return this._matchFilter;
  }

  // match_pattern - computed: true, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
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

  // replace_pattern - computed: true, optional: true, required: false
  private _replacePattern?: string; 
  public get replacePattern() {
    return this.getStringAttribute('replace_pattern');
  }
  public set replacePattern(value: string) {
    this._replacePattern = value;
  }
  public resetReplacePattern() {
    this._replacePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePatternInput() {
    return this._replacePattern;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultIdentityMapperRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: true, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
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
      all_included_identity_mapper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allIncludedIdentityMapper),
      any_included_identity_mapper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anyIncludedIdentityMapper),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      match_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchAttribute),
      match_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchBaseDn),
      match_filter: cdktf.stringToTerraform(this._matchFilter),
      match_pattern: cdktf.stringToTerraform(this._matchPattern),
      name: cdktf.stringToTerraform(this._name),
      replace_pattern: cdktf.stringToTerraform(this._replacePattern),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_included_identity_mapper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allIncludedIdentityMapper),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_included_identity_mapper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anyIncludedIdentityMapper),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      match_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      match_filter: {
        value: cdktf.stringToHclTerraform(this._matchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_pattern: {
        value: cdktf.stringToHclTerraform(this._matchPattern),
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
      replace_pattern: {
        value: cdktf.stringToHclTerraform(this._replacePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

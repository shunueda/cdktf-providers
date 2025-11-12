// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultCertificateMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for this Certificate Mapper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#description DefaultCertificateMapper#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Certificate Mapper is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#enabled DefaultCertificateMapper#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Certificate Mapper. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#extension_argument DefaultCertificateMapper#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Certificate Mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#extension_class DefaultCertificateMapper#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the name of the digest algorithm to compute the fingerprint of client certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#fingerprint_algorithm DefaultCertificateMapper#fingerprint_algorithm}
  */
  readonly fingerprintAlgorithm?: string;
  /**
  * Specifies the attribute in which to look for the fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#fingerprint_attribute DefaultCertificateMapper#fingerprint_attribute}
  */
  readonly fingerprintAttribute?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#name DefaultCertificateMapper#name}
  */
  readonly name: string;
  /**
  * The set of arguments used to customize the behavior for the Scripted Certificate Mapper. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#script_argument DefaultCertificateMapper#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Certificate Mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#script_class DefaultCertificateMapper#script_class}
  */
  readonly scriptClass?: string;
  /**
  * Specifies the name or OID of the attribute whose value should exactly match the certificate subject DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#subject_attribute DefaultCertificateMapper#subject_attribute}
  */
  readonly subjectAttribute?: string;
  /**
  * Specifies a mapping between certificate attributes and user attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#subject_attribute_mapping DefaultCertificateMapper#subject_attribute_mapping}
  */
  readonly subjectAttributeMapping?: string[];
  /**
  * When the `type` attribute is set to:
  *   - One of [`subject-dn-to-user-attribute`, `subject-attribute-to-user-attribute`]: Specifies the base DNs that should be used when performing searches to map the client certificate to a user entry.
  *   - `fingerprint`: Specifies the set of base DNs below which to search for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#user_base_dn DefaultCertificateMapper#user_base_dn}
  */
  readonly userBaseDn?: string[];
}
export interface DefaultCertificateMapperRequiredActions {
}

export function defaultCertificateMapperRequiredActionsToTerraform(struct?: DefaultCertificateMapperRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultCertificateMapperRequiredActionsToHclTerraform(struct?: DefaultCertificateMapperRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultCertificateMapperRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultCertificateMapperRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCertificateMapperRequiredActions | undefined) {
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

export class DefaultCertificateMapperRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultCertificateMapperRequiredActionsOutputReference {
    return new DefaultCertificateMapperRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper pingdirectory_default_certificate_mapper}
*/
export class DefaultCertificateMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_certificate_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultCertificateMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultCertificateMapper to import
  * @param importFromId The id of the existing DefaultCertificateMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultCertificateMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_certificate_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_certificate_mapper pingdirectory_default_certificate_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultCertificateMapperConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultCertificateMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_certificate_mapper',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._fingerprintAlgorithm = config.fingerprintAlgorithm;
    this._fingerprintAttribute = config.fingerprintAttribute;
    this._name = config.name;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._subjectAttribute = config.subjectAttribute;
    this._subjectAttributeMapping = config.subjectAttributeMapping;
    this._userBaseDn = config.userBaseDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fingerprint_algorithm - computed: true, optional: true, required: false
  private _fingerprintAlgorithm?: string; 
  public get fingerprintAlgorithm() {
    return this.getStringAttribute('fingerprint_algorithm');
  }
  public set fingerprintAlgorithm(value: string) {
    this._fingerprintAlgorithm = value;
  }
  public resetFingerprintAlgorithm() {
    this._fingerprintAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintAlgorithmInput() {
    return this._fingerprintAlgorithm;
  }

  // fingerprint_attribute - computed: true, optional: true, required: false
  private _fingerprintAttribute?: string; 
  public get fingerprintAttribute() {
    return this.getStringAttribute('fingerprint_attribute');
  }
  public set fingerprintAttribute(value: string) {
    this._fingerprintAttribute = value;
  }
  public resetFingerprintAttribute() {
    this._fingerprintAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintAttributeInput() {
    return this._fingerprintAttribute;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultCertificateMapperRequiredActionsList(this, "required_actions", true);
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

  // subject_attribute - computed: true, optional: true, required: false
  private _subjectAttribute?: string; 
  public get subjectAttribute() {
    return this.getStringAttribute('subject_attribute');
  }
  public set subjectAttribute(value: string) {
    this._subjectAttribute = value;
  }
  public resetSubjectAttribute() {
    this._subjectAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAttributeInput() {
    return this._subjectAttribute;
  }

  // subject_attribute_mapping - computed: true, optional: true, required: false
  private _subjectAttributeMapping?: string[]; 
  public get subjectAttributeMapping() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_attribute_mapping'));
  }
  public set subjectAttributeMapping(value: string[]) {
    this._subjectAttributeMapping = value;
  }
  public resetSubjectAttributeMapping() {
    this._subjectAttributeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAttributeMappingInput() {
    return this._subjectAttributeMapping;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_base_dn - computed: true, optional: true, required: false
  private _userBaseDn?: string[]; 
  public get userBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('user_base_dn'));
  }
  public set userBaseDn(value: string[]) {
    this._userBaseDn = value;
  }
  public resetUserBaseDn() {
    this._userBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBaseDnInput() {
    return this._userBaseDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      fingerprint_algorithm: cdktf.stringToTerraform(this._fingerprintAlgorithm),
      fingerprint_attribute: cdktf.stringToTerraform(this._fingerprintAttribute),
      name: cdktf.stringToTerraform(this._name),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      subject_attribute: cdktf.stringToTerraform(this._subjectAttribute),
      subject_attribute_mapping: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectAttributeMapping),
      user_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userBaseDn),
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
      fingerprint_algorithm: {
        value: cdktf.stringToHclTerraform(this._fingerprintAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint_attribute: {
        value: cdktf.stringToHclTerraform(this._fingerprintAttribute),
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
      subject_attribute: {
        value: cdktf.stringToHclTerraform(this._subjectAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_attribute_mapping: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjectAttributeMapping),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

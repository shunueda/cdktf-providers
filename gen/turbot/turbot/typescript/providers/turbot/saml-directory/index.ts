// https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#allow_group_syncing SamlDirectory#allow_group_syncing}
  */
  readonly allowGroupSyncing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#allow_idp_initiated_sso SamlDirectory#allow_idp_initiated_sso}
  */
  readonly allowIdpInitiatedSso?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#certificate SamlDirectory#certificate}
  */
  readonly certificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#description SamlDirectory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#entry_point SamlDirectory#entry_point}
  */
  readonly entryPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#group_filter SamlDirectory#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#group_id_template SamlDirectory#group_id_template}
  */
  readonly groupIdTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#id SamlDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#issuer SamlDirectory#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#name_id_format SamlDirectory#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#parent SamlDirectory#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#pool_id SamlDirectory#pool_id}
  */
  readonly poolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#profile_groups_attribute SamlDirectory#profile_groups_attribute}
  */
  readonly profileGroupsAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#profile_id_template SamlDirectory#profile_id_template}
  */
  readonly profileIdTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#sign_requests SamlDirectory#sign_requests}
  */
  readonly signRequests?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#signature_algorithm SamlDirectory#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#signature_private_key SamlDirectory#signature_private_key}
  */
  readonly signaturePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#tags SamlDirectory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#title SamlDirectory#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory turbot_saml_directory}
*/
export class SamlDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "turbot_saml_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlDirectory to import
  * @param importFromId The id of the existing SamlDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "turbot_saml_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/saml_directory turbot_saml_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: SamlDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'turbot_saml_directory',
      terraformGeneratorMetadata: {
        providerName: 'turbot',
        providerVersion: '1.13.0',
        providerVersionConstraint: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowGroupSyncing = config.allowGroupSyncing;
    this._allowIdpInitiatedSso = config.allowIdpInitiatedSso;
    this._certificate = config.certificate;
    this._description = config.description;
    this._entryPoint = config.entryPoint;
    this._groupFilter = config.groupFilter;
    this._groupIdTemplate = config.groupIdTemplate;
    this._id = config.id;
    this._issuer = config.issuer;
    this._nameIdFormat = config.nameIdFormat;
    this._parent = config.parent;
    this._poolId = config.poolId;
    this._profileGroupsAttribute = config.profileGroupsAttribute;
    this._profileIdTemplate = config.profileIdTemplate;
    this._signRequests = config.signRequests;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._signaturePrivateKey = config.signaturePrivateKey;
    this._tags = config.tags;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_group_syncing - computed: false, optional: true, required: false
  private _allowGroupSyncing?: boolean | cdktf.IResolvable; 
  public get allowGroupSyncing() {
    return this.getBooleanAttribute('allow_group_syncing');
  }
  public set allowGroupSyncing(value: boolean | cdktf.IResolvable) {
    this._allowGroupSyncing = value;
  }
  public resetAllowGroupSyncing() {
    this._allowGroupSyncing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGroupSyncingInput() {
    return this._allowGroupSyncing;
  }

  // allow_idp_initiated_sso - computed: false, optional: true, required: false
  private _allowIdpInitiatedSso?: boolean | cdktf.IResolvable; 
  public get allowIdpInitiatedSso() {
    return this.getBooleanAttribute('allow_idp_initiated_sso');
  }
  public set allowIdpInitiatedSso(value: boolean | cdktf.IResolvable) {
    this._allowIdpInitiatedSso = value;
  }
  public resetAllowIdpInitiatedSso() {
    this._allowIdpInitiatedSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIdpInitiatedSsoInput() {
    return this._allowIdpInitiatedSso;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

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

  // directory_type - computed: true, optional: false, required: false
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }

  // entry_point - computed: false, optional: false, required: true
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // group_filter - computed: false, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // group_id_template - computed: false, optional: true, required: false
  private _groupIdTemplate?: string; 
  public get groupIdTemplate() {
    return this.getStringAttribute('group_id_template');
  }
  public set groupIdTemplate(value: string) {
    this._groupIdTemplate = value;
  }
  public resetGroupIdTemplate() {
    this._groupIdTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdTemplateInput() {
    return this._groupIdTemplate;
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

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // name_id_format - computed: false, optional: true, required: false
  private _nameIdFormat?: string; 
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }
  public set nameIdFormat(value: string) {
    this._nameIdFormat = value;
  }
  public resetNameIdFormat() {
    this._nameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdFormatInput() {
    return this._nameIdFormat;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parent_akas - computed: true, optional: false, required: false
  public get parentAkas() {
    return this.getListAttribute('parent_akas');
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // profile_groups_attribute - computed: false, optional: true, required: false
  private _profileGroupsAttribute?: string; 
  public get profileGroupsAttribute() {
    return this.getStringAttribute('profile_groups_attribute');
  }
  public set profileGroupsAttribute(value: string) {
    this._profileGroupsAttribute = value;
  }
  public resetProfileGroupsAttribute() {
    this._profileGroupsAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGroupsAttributeInput() {
    return this._profileGroupsAttribute;
  }

  // profile_id_template - computed: false, optional: false, required: true
  private _profileIdTemplate?: string; 
  public get profileIdTemplate() {
    return this.getStringAttribute('profile_id_template');
  }
  public set profileIdTemplate(value: string) {
    this._profileIdTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdTemplateInput() {
    return this._profileIdTemplate;
  }

  // sign_requests - computed: false, optional: true, required: false
  private _signRequests?: string; 
  public get signRequests() {
    return this.getStringAttribute('sign_requests');
  }
  public set signRequests(value: string) {
    this._signRequests = value;
  }
  public resetSignRequests() {
    this._signRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signRequestsInput() {
    return this._signRequests;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signature_private_key - computed: false, optional: true, required: false
  private _signaturePrivateKey?: string; 
  public get signaturePrivateKey() {
    return this.getStringAttribute('signature_private_key');
  }
  public set signaturePrivateKey(value: string) {
    this._signaturePrivateKey = value;
  }
  public resetSignaturePrivateKey() {
    this._signaturePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturePrivateKeyInput() {
    return this._signaturePrivateKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_group_syncing: cdktf.booleanToTerraform(this._allowGroupSyncing),
      allow_idp_initiated_sso: cdktf.booleanToTerraform(this._allowIdpInitiatedSso),
      certificate: cdktf.stringToTerraform(this._certificate),
      description: cdktf.stringToTerraform(this._description),
      entry_point: cdktf.stringToTerraform(this._entryPoint),
      group_filter: cdktf.stringToTerraform(this._groupFilter),
      group_id_template: cdktf.stringToTerraform(this._groupIdTemplate),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      name_id_format: cdktf.stringToTerraform(this._nameIdFormat),
      parent: cdktf.stringToTerraform(this._parent),
      pool_id: cdktf.stringToTerraform(this._poolId),
      profile_groups_attribute: cdktf.stringToTerraform(this._profileGroupsAttribute),
      profile_id_template: cdktf.stringToTerraform(this._profileIdTemplate),
      sign_requests: cdktf.stringToTerraform(this._signRequests),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      signature_private_key: cdktf.stringToTerraform(this._signaturePrivateKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_group_syncing: {
        value: cdktf.booleanToHclTerraform(this._allowGroupSyncing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_idp_initiated_sso: {
        value: cdktf.booleanToHclTerraform(this._allowIdpInitiatedSso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
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
      entry_point: {
        value: cdktf.stringToHclTerraform(this._entryPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_filter: {
        value: cdktf.stringToHclTerraform(this._groupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id_template: {
        value: cdktf.stringToHclTerraform(this._groupIdTemplate),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_id_format: {
        value: cdktf.stringToHclTerraform(this._nameIdFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_groups_attribute: {
        value: cdktf.stringToHclTerraform(this._profileGroupsAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id_template: {
        value: cdktf.stringToHclTerraform(this._profileIdTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_requests: {
        value: cdktf.stringToHclTerraform(this._signRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_private_key: {
        value: cdktf.stringToHclTerraform(this._signaturePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

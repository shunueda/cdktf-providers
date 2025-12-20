// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamUserSamlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * auxiliary domain, like: `xxx.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config#auxiliary_domain CamUserSamlConfig#auxiliary_domain}
  */
  readonly auxiliaryDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config#id CamUserSamlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path used to save the saml Metadata file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config#metadata_document_file CamUserSamlConfig#metadata_document_file}
  */
  readonly metadataDocumentFile?: string;
  /**
  * SAML metadata document, xml format, support string content or file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config#saml_metadata_document CamUserSamlConfig#saml_metadata_document}
  */
  readonly samlMetadataDocument: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config tencentcloud_cam_user_saml_config}
*/
export class CamUserSamlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_user_saml_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamUserSamlConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamUserSamlConfig to import
  * @param importFromId The id of the existing CamUserSamlConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamUserSamlConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_user_saml_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_user_saml_config tencentcloud_cam_user_saml_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamUserSamlConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CamUserSamlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_user_saml_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auxiliaryDomain = config.auxiliaryDomain;
    this._id = config.id;
    this._metadataDocumentFile = config.metadataDocumentFile;
    this._samlMetadataDocument = config.samlMetadataDocument;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_domain - computed: true, optional: true, required: false
  private _auxiliaryDomain?: string; 
  public get auxiliaryDomain() {
    return this.getStringAttribute('auxiliary_domain');
  }
  public set auxiliaryDomain(value: string) {
    this._auxiliaryDomain = value;
  }
  public resetAuxiliaryDomain() {
    this._auxiliaryDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryDomainInput() {
    return this._auxiliaryDomain;
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

  // metadata_document_file - computed: false, optional: true, required: false
  private _metadataDocumentFile?: string; 
  public get metadataDocumentFile() {
    return this.getStringAttribute('metadata_document_file');
  }
  public set metadataDocumentFile(value: string) {
    this._metadataDocumentFile = value;
  }
  public resetMetadataDocumentFile() {
    this._metadataDocumentFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataDocumentFileInput() {
    return this._metadataDocumentFile;
  }

  // saml_metadata_document - computed: false, optional: false, required: true
  private _samlMetadataDocument?: string; 
  public get samlMetadataDocument() {
    return this.getStringAttribute('saml_metadata_document');
  }
  public set samlMetadataDocument(value: string) {
    this._samlMetadataDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataDocumentInput() {
    return this._samlMetadataDocument;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auxiliary_domain: cdktf.stringToTerraform(this._auxiliaryDomain),
      id: cdktf.stringToTerraform(this._id),
      metadata_document_file: cdktf.stringToTerraform(this._metadataDocumentFile),
      saml_metadata_document: cdktf.stringToTerraform(this._samlMetadataDocument),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auxiliary_domain: {
        value: cdktf.stringToHclTerraform(this._auxiliaryDomain),
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
      metadata_document_file: {
        value: cdktf.stringToHclTerraform(this._metadataDocumentFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_metadata_document: {
        value: cdktf.stringToHclTerraform(this._samlMetadataDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

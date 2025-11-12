// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirmwareDownloadTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#annotation FirmwareDownloadTask#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#auth_pass FirmwareDownloadTask#auth_pass}
  */
  readonly authPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#auth_type FirmwareDownloadTask#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#description FirmwareDownloadTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#dnld_task_flip FirmwareDownloadTask#dnld_task_flip}
  */
  readonly dnldTaskFlip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#id FirmwareDownloadTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#identity_private_key_contents FirmwareDownloadTask#identity_private_key_contents}
  */
  readonly identityPrivateKeyContents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#identity_private_key_passphrase FirmwareDownloadTask#identity_private_key_passphrase}
  */
  readonly identityPrivateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#identity_public_key_contents FirmwareDownloadTask#identity_public_key_contents}
  */
  readonly identityPublicKeyContents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#load_catalog_if_exists_and_newer FirmwareDownloadTask#load_catalog_if_exists_and_newer}
  */
  readonly loadCatalogIfExistsAndNewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#name FirmwareDownloadTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#name_alias FirmwareDownloadTask#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#password FirmwareDownloadTask#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#polling_interval FirmwareDownloadTask#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#proto FirmwareDownloadTask#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#url FirmwareDownloadTask#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#user FirmwareDownloadTask#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task aci_firmware_download_task}
*/
export class FirmwareDownloadTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_firmware_download_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirmwareDownloadTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirmwareDownloadTask to import
  * @param importFromId The id of the existing FirmwareDownloadTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirmwareDownloadTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_firmware_download_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/firmware_download_task aci_firmware_download_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirmwareDownloadTaskConfig
  */
  public constructor(scope: Construct, id: string, config: FirmwareDownloadTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_firmware_download_task',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._authPass = config.authPass;
    this._authType = config.authType;
    this._description = config.description;
    this._dnldTaskFlip = config.dnldTaskFlip;
    this._id = config.id;
    this._identityPrivateKeyContents = config.identityPrivateKeyContents;
    this._identityPrivateKeyPassphrase = config.identityPrivateKeyPassphrase;
    this._identityPublicKeyContents = config.identityPublicKeyContents;
    this._loadCatalogIfExistsAndNewer = config.loadCatalogIfExistsAndNewer;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._password = config.password;
    this._pollingInterval = config.pollingInterval;
    this._proto = config.proto;
    this._url = config.url;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // auth_pass - computed: true, optional: true, required: false
  private _authPass?: string; 
  public get authPass() {
    return this.getStringAttribute('auth_pass');
  }
  public set authPass(value: string) {
    this._authPass = value;
  }
  public resetAuthPass() {
    this._authPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPassInput() {
    return this._authPass;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // dnld_task_flip - computed: true, optional: true, required: false
  private _dnldTaskFlip?: string; 
  public get dnldTaskFlip() {
    return this.getStringAttribute('dnld_task_flip');
  }
  public set dnldTaskFlip(value: string) {
    this._dnldTaskFlip = value;
  }
  public resetDnldTaskFlip() {
    this._dnldTaskFlip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnldTaskFlipInput() {
    return this._dnldTaskFlip;
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

  // identity_private_key_contents - computed: true, optional: true, required: false
  private _identityPrivateKeyContents?: string; 
  public get identityPrivateKeyContents() {
    return this.getStringAttribute('identity_private_key_contents');
  }
  public set identityPrivateKeyContents(value: string) {
    this._identityPrivateKeyContents = value;
  }
  public resetIdentityPrivateKeyContents() {
    this._identityPrivateKeyContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPrivateKeyContentsInput() {
    return this._identityPrivateKeyContents;
  }

  // identity_private_key_passphrase - computed: true, optional: true, required: false
  private _identityPrivateKeyPassphrase?: string; 
  public get identityPrivateKeyPassphrase() {
    return this.getStringAttribute('identity_private_key_passphrase');
  }
  public set identityPrivateKeyPassphrase(value: string) {
    this._identityPrivateKeyPassphrase = value;
  }
  public resetIdentityPrivateKeyPassphrase() {
    this._identityPrivateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPrivateKeyPassphraseInput() {
    return this._identityPrivateKeyPassphrase;
  }

  // identity_public_key_contents - computed: true, optional: true, required: false
  private _identityPublicKeyContents?: string; 
  public get identityPublicKeyContents() {
    return this.getStringAttribute('identity_public_key_contents');
  }
  public set identityPublicKeyContents(value: string) {
    this._identityPublicKeyContents = value;
  }
  public resetIdentityPublicKeyContents() {
    this._identityPublicKeyContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPublicKeyContentsInput() {
    return this._identityPublicKeyContents;
  }

  // load_catalog_if_exists_and_newer - computed: true, optional: true, required: false
  private _loadCatalogIfExistsAndNewer?: string; 
  public get loadCatalogIfExistsAndNewer() {
    return this.getStringAttribute('load_catalog_if_exists_and_newer');
  }
  public set loadCatalogIfExistsAndNewer(value: string) {
    this._loadCatalogIfExistsAndNewer = value;
  }
  public resetLoadCatalogIfExistsAndNewer() {
    this._loadCatalogIfExistsAndNewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadCatalogIfExistsAndNewerInput() {
    return this._loadCatalogIfExistsAndNewer;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // polling_interval - computed: true, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // proto - computed: true, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auth_pass: cdktf.stringToTerraform(this._authPass),
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      dnld_task_flip: cdktf.stringToTerraform(this._dnldTaskFlip),
      id: cdktf.stringToTerraform(this._id),
      identity_private_key_contents: cdktf.stringToTerraform(this._identityPrivateKeyContents),
      identity_private_key_passphrase: cdktf.stringToTerraform(this._identityPrivateKeyPassphrase),
      identity_public_key_contents: cdktf.stringToTerraform(this._identityPublicKeyContents),
      load_catalog_if_exists_and_newer: cdktf.stringToTerraform(this._loadCatalogIfExistsAndNewer),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      password: cdktf.stringToTerraform(this._password),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      proto: cdktf.stringToTerraform(this._proto),
      url: cdktf.stringToTerraform(this._url),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_pass: {
        value: cdktf.stringToHclTerraform(this._authPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
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
      dnld_task_flip: {
        value: cdktf.stringToHclTerraform(this._dnldTaskFlip),
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
      identity_private_key_contents: {
        value: cdktf.stringToHclTerraform(this._identityPrivateKeyContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._identityPrivateKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_public_key_contents: {
        value: cdktf.stringToHclTerraform(this._identityPublicKeyContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_catalog_if_exists_and_newer: {
        value: cdktf.stringToHclTerraform(this._loadCatalogIfExistsAndNewer),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

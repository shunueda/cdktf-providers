// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate file encoded in base64 based on provider data. <font color="red">Required only when</font> 'data-receiving' is set to 'manually'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#base64_certificate ManagementIdentityProvider#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Metadata file encoded in base64 based on the provider data. <font color="red">Required only when</font> 'data-receiving' is set to 'metadata_file'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#base64_metadata_file ManagementIdentityProvider#base64_metadata_file}
  */
  readonly base64MetadataFile?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#color ManagementIdentityProvider#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#comments ManagementIdentityProvider#comments}
  */
  readonly comments?: string;
  /**
  * Data receiving method from the SAML Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#data_receiving ManagementIdentityProvider#data_receiving}
  */
  readonly dataReceiving?: string;
  /**
  * Gateway for the SAML Identity Provider usage. Identified by name or UID. <font color="red">Required only when</font> 'usage' is set to 'gateway_policy_and_logs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#gateway ManagementIdentityProvider#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#id ManagementIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#ignore_errors ManagementIdentityProvider#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#ignore_warnings ManagementIdentityProvider#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Login URL based on the provider data. <font color="red">Required only when</font> 'data-receiving' is set to 'manually'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#login_url ManagementIdentityProvider#login_url}
  */
  readonly loginUrl?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#name ManagementIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Received Identifier (Entity ID) based on the provider data. <font color="red">Required only when</font> 'data-receiving' is set to 'manually'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#received_identifier ManagementIdentityProvider#received_identifier}
  */
  readonly receivedIdentifier?: string;
  /**
  * Service for the selected gateway. <font color="red">Required only when</font> 'usage' is set to 'gateway_policy_and_logs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#service ManagementIdentityProvider#service}
  */
  readonly service?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#tags ManagementIdentityProvider#tags}
  */
  readonly tags?: string[];
  /**
  * Usage of Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#usage ManagementIdentityProvider#usage}
  */
  readonly usage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider checkpoint_management_identity_provider}
*/
export class ManagementIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementIdentityProvider to import
  * @param importFromId The id of the existing ManagementIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_identity_provider checkpoint_management_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64Certificate = config.base64Certificate;
    this._base64MetadataFile = config.base64MetadataFile;
    this._color = config.color;
    this._comments = config.comments;
    this._dataReceiving = config.dataReceiving;
    this._gateway = config.gateway;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._loginUrl = config.loginUrl;
    this._name = config.name;
    this._receivedIdentifier = config.receivedIdentifier;
    this._service = config.service;
    this._tags = config.tags;
    this._usage = config.usage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_certificate - computed: false, optional: true, required: false
  private _base64Certificate?: string; 
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }
  public set base64Certificate(value: string) {
    this._base64Certificate = value;
  }
  public resetBase64Certificate() {
    this._base64Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64CertificateInput() {
    return this._base64Certificate;
  }

  // base64_metadata_file - computed: false, optional: true, required: false
  private _base64MetadataFile?: string; 
  public get base64MetadataFile() {
    return this.getStringAttribute('base64_metadata_file');
  }
  public set base64MetadataFile(value: string) {
    this._base64MetadataFile = value;
  }
  public resetBase64MetadataFile() {
    this._base64MetadataFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64MetadataFileInput() {
    return this._base64MetadataFile;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // data_receiving - computed: false, optional: true, required: false
  private _dataReceiving?: string; 
  public get dataReceiving() {
    return this.getStringAttribute('data_receiving');
  }
  public set dataReceiving(value: string) {
    this._dataReceiving = value;
  }
  public resetDataReceiving() {
    this._dataReceiving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataReceivingInput() {
    return this._dataReceiving;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // login_url - computed: false, optional: true, required: false
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  public resetLoginUrl() {
    this._loginUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
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

  // received_identifier - computed: false, optional: true, required: false
  private _receivedIdentifier?: string; 
  public get receivedIdentifier() {
    return this.getStringAttribute('received_identifier');
  }
  public set receivedIdentifier(value: string) {
    this._receivedIdentifier = value;
  }
  public resetReceivedIdentifier() {
    this._receivedIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedIdentifierInput() {
    return this._receivedIdentifier;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_certificate: cdktf.stringToTerraform(this._base64Certificate),
      base64_metadata_file: cdktf.stringToTerraform(this._base64MetadataFile),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      data_receiving: cdktf.stringToTerraform(this._dataReceiving),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      login_url: cdktf.stringToTerraform(this._loginUrl),
      name: cdktf.stringToTerraform(this._name),
      received_identifier: cdktf.stringToTerraform(this._receivedIdentifier),
      service: cdktf.stringToTerraform(this._service),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      usage: cdktf.stringToTerraform(this._usage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64_certificate: {
        value: cdktf.stringToHclTerraform(this._base64Certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_metadata_file: {
        value: cdktf.stringToHclTerraform(this._base64MetadataFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_receiving: {
        value: cdktf.stringToHclTerraform(this._dataReceiving),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_url: {
        value: cdktf.stringToHclTerraform(this._loginUrl),
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
      received_identifier: {
        value: cdktf.stringToHclTerraform(this._receivedIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

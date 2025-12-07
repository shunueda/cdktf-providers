// https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenAmtConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#cert_file_content OpenAmt#cert_file_content}
  */
  readonly certFileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#cert_file_name OpenAmt#cert_file_name}
  */
  readonly certFileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#cert_file_password OpenAmt#cert_file_password}
  */
  readonly certFilePassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#domain_name OpenAmt#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#enabled OpenAmt#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#id OpenAmt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#mpspassword OpenAmt#mpspassword}
  */
  readonly mpspassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#mpsserver OpenAmt#mpsserver}
  */
  readonly mpsserver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#mpsuser OpenAmt#mpsuser}
  */
  readonly mpsuser: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt portainer_open_amt}
*/
export class OpenAmt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_open_amt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenAmt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenAmt to import
  * @param importFromId The id of the existing OpenAmt that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenAmt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_open_amt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/open_amt portainer_open_amt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenAmtConfig
  */
  public constructor(scope: Construct, id: string, config: OpenAmtConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_open_amt',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.1',
        providerVersionConstraint: '1.20.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certFileContent = config.certFileContent;
    this._certFileName = config.certFileName;
    this._certFilePassword = config.certFilePassword;
    this._domainName = config.domainName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._mpspassword = config.mpspassword;
    this._mpsserver = config.mpsserver;
    this._mpsuser = config.mpsuser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_file_content - computed: false, optional: false, required: true
  private _certFileContent?: string; 
  public get certFileContent() {
    return this.getStringAttribute('cert_file_content');
  }
  public set certFileContent(value: string) {
    this._certFileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileContentInput() {
    return this._certFileContent;
  }

  // cert_file_name - computed: false, optional: false, required: true
  private _certFileName?: string; 
  public get certFileName() {
    return this.getStringAttribute('cert_file_name');
  }
  public set certFileName(value: string) {
    this._certFileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileNameInput() {
    return this._certFileName;
  }

  // cert_file_password - computed: false, optional: false, required: true
  private _certFilePassword?: string; 
  public get certFilePassword() {
    return this.getStringAttribute('cert_file_password');
  }
  public set certFilePassword(value: string) {
    this._certFilePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certFilePasswordInput() {
    return this._certFilePassword;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // mpspassword - computed: false, optional: false, required: true
  private _mpspassword?: string; 
  public get mpspassword() {
    return this.getStringAttribute('mpspassword');
  }
  public set mpspassword(value: string) {
    this._mpspassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpspasswordInput() {
    return this._mpspassword;
  }

  // mpsserver - computed: false, optional: false, required: true
  private _mpsserver?: string; 
  public get mpsserver() {
    return this.getStringAttribute('mpsserver');
  }
  public set mpsserver(value: string) {
    this._mpsserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpsserverInput() {
    return this._mpsserver;
  }

  // mpsuser - computed: false, optional: false, required: true
  private _mpsuser?: string; 
  public get mpsuser() {
    return this.getStringAttribute('mpsuser');
  }
  public set mpsuser(value: string) {
    this._mpsuser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpsuserInput() {
    return this._mpsuser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_file_content: cdktf.stringToTerraform(this._certFileContent),
      cert_file_name: cdktf.stringToTerraform(this._certFileName),
      cert_file_password: cdktf.stringToTerraform(this._certFilePassword),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      mpspassword: cdktf.stringToTerraform(this._mpspassword),
      mpsserver: cdktf.stringToTerraform(this._mpsserver),
      mpsuser: cdktf.stringToTerraform(this._mpsuser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_file_content: {
        value: cdktf.stringToHclTerraform(this._certFileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_file_name: {
        value: cdktf.stringToHclTerraform(this._certFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_file_password: {
        value: cdktf.stringToHclTerraform(this._certFilePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpspassword: {
        value: cdktf.stringToHclTerraform(this._mpspassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsserver: {
        value: cdktf.stringToHclTerraform(this._mpsserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsuser: {
        value: cdktf.stringToHclTerraform(this._mpsuser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

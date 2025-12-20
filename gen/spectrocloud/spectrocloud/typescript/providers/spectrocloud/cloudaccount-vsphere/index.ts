// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountVsphereConfig extends cdktf.TerraformMetaArguments {
  /**
  * Context of the cloud account. Allowed values are `project` or `tenant`. Default value is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#context CloudaccountVsphere#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#id CloudaccountVsphere#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cloud account. This name is used to identify the cloud account in the Spectro Cloud UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#name CloudaccountVsphere#name}
  */
  readonly name: string;
  /**
  * ID of the private cloud gateway. This is the ID of the private cloud gateway that is used to connect to the vSphere cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#private_cloud_gateway_id CloudaccountVsphere#private_cloud_gateway_id}
  */
  readonly privateCloudGatewayId: string;
  /**
  * Ignore insecure error. This is a boolean value that indicates whether to ignore the insecure error or not. If not specified, the default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#vsphere_ignore_insecure_error CloudaccountVsphere#vsphere_ignore_insecure_error}
  */
  readonly vsphereIgnoreInsecureError?: boolean | cdktf.IResolvable;
  /**
  * Password of the vSphere cloud. This is the password of the vSphere cloud that is used to connect to the vSphere cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#vsphere_password CloudaccountVsphere#vsphere_password}
  */
  readonly vspherePassword: string;
  /**
  * Username of the vSphere cloud. This is the username of the vSphere cloud that is used to connect to the vSphere cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#vsphere_username CloudaccountVsphere#vsphere_username}
  */
  readonly vsphereUsername: string;
  /**
  * vCenter server address. This is the address of the vCenter server that is used to connect to the vSphere cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#vsphere_vcenter CloudaccountVsphere#vsphere_vcenter}
  */
  readonly vsphereVcenter: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere spectrocloud_cloudaccount_vsphere}
*/
export class CloudaccountVsphere extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cloudaccount_vsphere";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountVsphere resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountVsphere to import
  * @param importFromId The id of the existing CloudaccountVsphere that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountVsphere to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cloudaccount_vsphere", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_vsphere spectrocloud_cloudaccount_vsphere} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountVsphereConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountVsphereConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cloudaccount_vsphere',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.2',
        providerVersionConstraint: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._id = config.id;
    this._name = config.name;
    this._privateCloudGatewayId = config.privateCloudGatewayId;
    this._vsphereIgnoreInsecureError = config.vsphereIgnoreInsecureError;
    this._vspherePassword = config.vspherePassword;
    this._vsphereUsername = config.vsphereUsername;
    this._vsphereVcenter = config.vsphereVcenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // private_cloud_gateway_id - computed: false, optional: false, required: true
  private _privateCloudGatewayId?: string; 
  public get privateCloudGatewayId() {
    return this.getStringAttribute('private_cloud_gateway_id');
  }
  public set privateCloudGatewayId(value: string) {
    this._privateCloudGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudGatewayIdInput() {
    return this._privateCloudGatewayId;
  }

  // vsphere_ignore_insecure_error - computed: false, optional: true, required: false
  private _vsphereIgnoreInsecureError?: boolean | cdktf.IResolvable; 
  public get vsphereIgnoreInsecureError() {
    return this.getBooleanAttribute('vsphere_ignore_insecure_error');
  }
  public set vsphereIgnoreInsecureError(value: boolean | cdktf.IResolvable) {
    this._vsphereIgnoreInsecureError = value;
  }
  public resetVsphereIgnoreInsecureError() {
    this._vsphereIgnoreInsecureError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereIgnoreInsecureErrorInput() {
    return this._vsphereIgnoreInsecureError;
  }

  // vsphere_password - computed: false, optional: false, required: true
  private _vspherePassword?: string; 
  public get vspherePassword() {
    return this.getStringAttribute('vsphere_password');
  }
  public set vspherePassword(value: string) {
    this._vspherePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vspherePasswordInput() {
    return this._vspherePassword;
  }

  // vsphere_username - computed: false, optional: false, required: true
  private _vsphereUsername?: string; 
  public get vsphereUsername() {
    return this.getStringAttribute('vsphere_username');
  }
  public set vsphereUsername(value: string) {
    this._vsphereUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereUsernameInput() {
    return this._vsphereUsername;
  }

  // vsphere_vcenter - computed: false, optional: false, required: true
  private _vsphereVcenter?: string; 
  public get vsphereVcenter() {
    return this.getStringAttribute('vsphere_vcenter');
  }
  public set vsphereVcenter(value: string) {
    this._vsphereVcenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVcenterInput() {
    return this._vsphereVcenter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_cloud_gateway_id: cdktf.stringToTerraform(this._privateCloudGatewayId),
      vsphere_ignore_insecure_error: cdktf.booleanToTerraform(this._vsphereIgnoreInsecureError),
      vsphere_password: cdktf.stringToTerraform(this._vspherePassword),
      vsphere_username: cdktf.stringToTerraform(this._vsphereUsername),
      vsphere_vcenter: cdktf.stringToTerraform(this._vsphereVcenter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_cloud_gateway_id: {
        value: cdktf.stringToHclTerraform(this._privateCloudGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_ignore_insecure_error: {
        value: cdktf.booleanToHclTerraform(this._vsphereIgnoreInsecureError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vsphere_password: {
        value: cdktf.stringToHclTerraform(this._vspherePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_username: {
        value: cdktf.stringToHclTerraform(this._vsphereUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_vcenter: {
        value: cdktf.stringToHclTerraform(this._vsphereVcenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

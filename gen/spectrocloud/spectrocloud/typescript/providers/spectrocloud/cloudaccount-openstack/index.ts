// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountOpenstackConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CA certificate of the OpenStack cloud that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#ca_certificate CloudaccountOpenstack#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * The context of the OpenStack configuration. Allowed values are `project` or `tenant`. Default value is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#context CloudaccountOpenstack#context}
  */
  readonly context?: string;
  /**
  * The default domain of the OpenStack cloud that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#default_domain CloudaccountOpenstack#default_domain}
  */
  readonly defaultDomain: string;
  /**
  * The default project of the OpenStack cloud that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#default_project CloudaccountOpenstack#default_project}
  */
  readonly defaultProject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#id CloudaccountOpenstack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identity endpoint of the OpenStack cloud that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#identity_endpoint CloudaccountOpenstack#identity_endpoint}
  */
  readonly identityEndpoint: string;
  /**
  * Name of the OpenStack cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#name CloudaccountOpenstack#name}
  */
  readonly name: string;
  /**
  * Whether to allow insecure connections to the OpenStack cloud. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#openstack_allow_insecure CloudaccountOpenstack#openstack_allow_insecure}
  */
  readonly openstackAllowInsecure?: boolean | cdktf.IResolvable;
  /**
  * The password of the OpenStack cloud that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#openstack_password CloudaccountOpenstack#openstack_password}
  */
  readonly openstackPassword: string;
  /**
  * The username of the OpenStack cloud that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#openstack_username CloudaccountOpenstack#openstack_username}
  */
  readonly openstackUsername: string;
  /**
  * The parent region of the OpenStack cloud that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#parent_region CloudaccountOpenstack#parent_region}
  */
  readonly parentRegion: string;
  /**
  * ID of the private cloud gateway that is used to connect to the OpenStack cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#private_cloud_gateway_id CloudaccountOpenstack#private_cloud_gateway_id}
  */
  readonly privateCloudGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack spectrocloud_cloudaccount_openstack}
*/
export class CloudaccountOpenstack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cloudaccount_openstack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountOpenstack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountOpenstack to import
  * @param importFromId The id of the existing CloudaccountOpenstack that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountOpenstack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cloudaccount_openstack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cloudaccount_openstack spectrocloud_cloudaccount_openstack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountOpenstackConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountOpenstackConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cloudaccount_openstack',
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
    this._caCertificate = config.caCertificate;
    this._context = config.context;
    this._defaultDomain = config.defaultDomain;
    this._defaultProject = config.defaultProject;
    this._id = config.id;
    this._identityEndpoint = config.identityEndpoint;
    this._name = config.name;
    this._openstackAllowInsecure = config.openstackAllowInsecure;
    this._openstackPassword = config.openstackPassword;
    this._openstackUsername = config.openstackUsername;
    this._parentRegion = config.parentRegion;
    this._privateCloudGatewayId = config.privateCloudGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

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

  // default_domain - computed: false, optional: false, required: true
  private _defaultDomain?: string; 
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }
  public set defaultDomain(value: string) {
    this._defaultDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain;
  }

  // default_project - computed: false, optional: false, required: true
  private _defaultProject?: string; 
  public get defaultProject() {
    return this.getStringAttribute('default_project');
  }
  public set defaultProject(value: string) {
    this._defaultProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProjectInput() {
    return this._defaultProject;
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

  // identity_endpoint - computed: false, optional: false, required: true
  private _identityEndpoint?: string; 
  public get identityEndpoint() {
    return this.getStringAttribute('identity_endpoint');
  }
  public set identityEndpoint(value: string) {
    this._identityEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityEndpointInput() {
    return this._identityEndpoint;
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

  // openstack_allow_insecure - computed: false, optional: true, required: false
  private _openstackAllowInsecure?: boolean | cdktf.IResolvable; 
  public get openstackAllowInsecure() {
    return this.getBooleanAttribute('openstack_allow_insecure');
  }
  public set openstackAllowInsecure(value: boolean | cdktf.IResolvable) {
    this._openstackAllowInsecure = value;
  }
  public resetOpenstackAllowInsecure() {
    this._openstackAllowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackAllowInsecureInput() {
    return this._openstackAllowInsecure;
  }

  // openstack_password - computed: false, optional: false, required: true
  private _openstackPassword?: string; 
  public get openstackPassword() {
    return this.getStringAttribute('openstack_password');
  }
  public set openstackPassword(value: string) {
    this._openstackPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackPasswordInput() {
    return this._openstackPassword;
  }

  // openstack_username - computed: false, optional: false, required: true
  private _openstackUsername?: string; 
  public get openstackUsername() {
    return this.getStringAttribute('openstack_username');
  }
  public set openstackUsername(value: string) {
    this._openstackUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackUsernameInput() {
    return this._openstackUsername;
  }

  // parent_region - computed: false, optional: false, required: true
  private _parentRegion?: string; 
  public get parentRegion() {
    return this.getStringAttribute('parent_region');
  }
  public set parentRegion(value: string) {
    this._parentRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRegionInput() {
    return this._parentRegion;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      context: cdktf.stringToTerraform(this._context),
      default_domain: cdktf.stringToTerraform(this._defaultDomain),
      default_project: cdktf.stringToTerraform(this._defaultProject),
      id: cdktf.stringToTerraform(this._id),
      identity_endpoint: cdktf.stringToTerraform(this._identityEndpoint),
      name: cdktf.stringToTerraform(this._name),
      openstack_allow_insecure: cdktf.booleanToTerraform(this._openstackAllowInsecure),
      openstack_password: cdktf.stringToTerraform(this._openstackPassword),
      openstack_username: cdktf.stringToTerraform(this._openstackUsername),
      parent_region: cdktf.stringToTerraform(this._parentRegion),
      private_cloud_gateway_id: cdktf.stringToTerraform(this._privateCloudGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_domain: {
        value: cdktf.stringToHclTerraform(this._defaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_project: {
        value: cdktf.stringToHclTerraform(this._defaultProject),
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
      identity_endpoint: {
        value: cdktf.stringToHclTerraform(this._identityEndpoint),
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
      openstack_allow_insecure: {
        value: cdktf.booleanToHclTerraform(this._openstackAllowInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      openstack_password: {
        value: cdktf.stringToHclTerraform(this._openstackPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openstack_username: {
        value: cdktf.stringToHclTerraform(this._openstackUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_region: {
        value: cdktf.stringToHclTerraform(this._parentRegion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of allowed prinicpals used by AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#allowed_principals VpcConnect#allowed_principals}
  */
  readonly allowedPrincipals?: string[];
  /**
  * List of allowed projects used by GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#allowed_projects VpcConnect#allowed_projects}
  */
  readonly allowedProjects?: string[];
  /**
  * List of approved subscriptions used by Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#approved_subscriptions VpcConnect#approved_subscriptions}
  */
  readonly approvedSubscriptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#id VpcConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The CloudAMQP instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#instance_id VpcConnect#instance_id}
  */
  readonly instanceId: number;
  /**
  * The region where the CloudAMQP instance is hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#region VpcConnect#region}
  */
  readonly region: string;
  /**
  * Configurable sleep in seconds between retries when enable PrivateLink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#sleep VpcConnect#sleep}
  */
  readonly sleep?: number;
  /**
  * Configurable timeout in seconds when enable PrivateLink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#timeout VpcConnect#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect cloudamqp_vpc_connect}
*/
export class VpcConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_vpc_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcConnect to import
  * @param importFromId The id of the existing VpcConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_vpc_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/vpc_connect cloudamqp_vpc_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConnectConfig
  */
  public constructor(scope: Construct, id: string, config: VpcConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_vpc_connect',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.1',
        providerVersionConstraint: '1.38.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedPrincipals = config.allowedPrincipals;
    this._allowedProjects = config.allowedProjects;
    this._approvedSubscriptions = config.approvedSubscriptions;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._region = config.region;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_zones - computed: true, optional: false, required: false
  public get activeZones() {
    return this.getListAttribute('active_zones');
  }

  // allowed_principals - computed: false, optional: true, required: false
  private _allowedPrincipals?: string[]; 
  public get allowedPrincipals() {
    return this.getListAttribute('allowed_principals');
  }
  public set allowedPrincipals(value: string[]) {
    this._allowedPrincipals = value;
  }
  public resetAllowedPrincipals() {
    this._allowedPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrincipalsInput() {
    return this._allowedPrincipals;
  }

  // allowed_projects - computed: false, optional: true, required: false
  private _allowedProjects?: string[]; 
  public get allowedProjects() {
    return this.getListAttribute('allowed_projects');
  }
  public set allowedProjects(value: string[]) {
    this._allowedProjects = value;
  }
  public resetAllowedProjects() {
    this._allowedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProjectsInput() {
    return this._allowedProjects;
  }

  // approved_subscriptions - computed: false, optional: true, required: false
  private _approvedSubscriptions?: string[]; 
  public get approvedSubscriptions() {
    return this.getListAttribute('approved_subscriptions');
  }
  public set approvedSubscriptions(value: string[]) {
    this._approvedSubscriptions = value;
  }
  public resetApprovedSubscriptions() {
    this._approvedSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedSubscriptionsInput() {
    return this._approvedSubscriptions;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipals),
      allowed_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedProjects),
      approved_subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvedSubscriptions),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrincipals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedProjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approved_subscriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvedSubscriptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

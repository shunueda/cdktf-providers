// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationLoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Turn logging on and off for this product. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#central_logging ApplicationLoadbalancer#central_logging}
  */
  readonly centralLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Collection of the Application Load Balancer IP addresses. (Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#ips ApplicationLoadbalancer#ips}
  */
  readonly ips?: string[];
  /**
  * Collection of private IP addresses with the subnet mask of the Application Load Balancer. IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#lb_private_ips ApplicationLoadbalancer#lb_private_ips}
  */
  readonly lbPrivateIps?: string[];
  /**
  * ID of the listening (inbound) LAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#listener_lan ApplicationLoadbalancer#listener_lan}
  */
  readonly listenerLan: number;
  /**
  * Specifies the format of the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#logging_format ApplicationLoadbalancer#logging_format}
  */
  readonly loggingFormat?: string;
  /**
  * The name of the Application Load Balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}
  */
  readonly name: string;
  /**
  * ID of the balanced private target LAN (outbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#target_lan ApplicationLoadbalancer#target_lan}
  */
  readonly targetLan: number;
  /**
  * flowlog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#flowlog ApplicationLoadbalancer#flowlog}
  */
  readonly flowlog?: ApplicationLoadbalancerFlowlog;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#timeouts ApplicationLoadbalancer#timeouts}
  */
  readonly timeouts?: ApplicationLoadbalancerTimeouts;
}
export interface ApplicationLoadbalancerFlowlog {
  /**
  * Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#action ApplicationLoadbalancer#action}
  */
  readonly action: string;
  /**
  * The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#bucket ApplicationLoadbalancer#bucket}
  */
  readonly bucket: string;
  /**
  * Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#direction ApplicationLoadbalancer#direction}
  */
  readonly direction: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}
  */
  readonly name: string;
}

export function applicationLoadbalancerFlowlogToTerraform(struct?: ApplicationLoadbalancerFlowlogOutputReference | ApplicationLoadbalancerFlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationLoadbalancerFlowlogToHclTerraform(struct?: ApplicationLoadbalancerFlowlogOutputReference | ApplicationLoadbalancerFlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationLoadbalancerFlowlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationLoadbalancerFlowlog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationLoadbalancerFlowlog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._bucket = undefined;
      this._direction = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._bucket = value.bucket;
      this._direction = value.direction;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
}
export interface ApplicationLoadbalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#create ApplicationLoadbalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#default ApplicationLoadbalancer#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#delete ApplicationLoadbalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#update ApplicationLoadbalancer#update}
  */
  readonly update?: string;
}

export function applicationLoadbalancerTimeoutsToTerraform(struct?: ApplicationLoadbalancerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function applicationLoadbalancerTimeoutsToHclTerraform(struct?: ApplicationLoadbalancerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationLoadbalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationLoadbalancerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationLoadbalancerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer ionoscloud_application_loadbalancer}
*/
export class ApplicationLoadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_application_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationLoadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationLoadbalancer to import
  * @param importFromId The id of the existing ApplicationLoadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationLoadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_application_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/application_loadbalancer ionoscloud_application_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationLoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationLoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_application_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._centralLogging = config.centralLogging;
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._ips = config.ips;
    this._lbPrivateIps = config.lbPrivateIps;
    this._listenerLan = config.listenerLan;
    this._loggingFormat = config.loggingFormat;
    this._name = config.name;
    this._targetLan = config.targetLan;
    this._flowlog.internalValue = config.flowlog;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // central_logging - computed: false, optional: true, required: false
  private _centralLogging?: boolean | cdktf.IResolvable; 
  public get centralLogging() {
    return this.getBooleanAttribute('central_logging');
  }
  public set centralLogging(value: boolean | cdktf.IResolvable) {
    this._centralLogging = value;
  }
  public resetCentralLogging() {
    this._centralLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralLoggingInput() {
    return this._centralLogging;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // lb_private_ips - computed: false, optional: true, required: false
  private _lbPrivateIps?: string[]; 
  public get lbPrivateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('lb_private_ips'));
  }
  public set lbPrivateIps(value: string[]) {
    this._lbPrivateIps = value;
  }
  public resetLbPrivateIps() {
    this._lbPrivateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPrivateIpsInput() {
    return this._lbPrivateIps;
  }

  // listener_lan - computed: false, optional: false, required: true
  private _listenerLan?: number; 
  public get listenerLan() {
    return this.getNumberAttribute('listener_lan');
  }
  public set listenerLan(value: number) {
    this._listenerLan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerLanInput() {
    return this._listenerLan;
  }

  // logging_format - computed: false, optional: true, required: false
  private _loggingFormat?: string; 
  public get loggingFormat() {
    return this.getStringAttribute('logging_format');
  }
  public set loggingFormat(value: string) {
    this._loggingFormat = value;
  }
  public resetLoggingFormat() {
    this._loggingFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFormatInput() {
    return this._loggingFormat;
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

  // target_lan - computed: false, optional: false, required: true
  private _targetLan?: number; 
  public get targetLan() {
    return this.getNumberAttribute('target_lan');
  }
  public set targetLan(value: number) {
    this._targetLan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLanInput() {
    return this._targetLan;
  }

  // flowlog - computed: false, optional: true, required: false
  private _flowlog = new ApplicationLoadbalancerFlowlogOutputReference(this, "flowlog");
  public get flowlog() {
    return this._flowlog;
  }
  public putFlowlog(value: ApplicationLoadbalancerFlowlog) {
    this._flowlog.internalValue = value;
  }
  public resetFlowlog() {
    this._flowlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowlogInput() {
    return this._flowlog.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationLoadbalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationLoadbalancerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      central_logging: cdktf.booleanToTerraform(this._centralLogging),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      lb_private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lbPrivateIps),
      listener_lan: cdktf.numberToTerraform(this._listenerLan),
      logging_format: cdktf.stringToTerraform(this._loggingFormat),
      name: cdktf.stringToTerraform(this._name),
      target_lan: cdktf.numberToTerraform(this._targetLan),
      flowlog: applicationLoadbalancerFlowlogToTerraform(this._flowlog.internalValue),
      timeouts: applicationLoadbalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      central_logging: {
        value: cdktf.booleanToHclTerraform(this._centralLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lb_private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lbPrivateIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      listener_lan: {
        value: cdktf.numberToHclTerraform(this._listenerLan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging_format: {
        value: cdktf.stringToHclTerraform(this._loggingFormat),
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
      target_lan: {
        value: cdktf.numberToHclTerraform(this._targetLan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flowlog: {
        value: applicationLoadbalancerFlowlogToHclTerraform(this._flowlog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationLoadbalancerFlowlogList",
      },
      timeouts: {
        value: applicationLoadbalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationLoadbalancerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

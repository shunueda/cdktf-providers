// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#external_ip ForwardEntry#external_ip}
  */
  readonly externalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#external_port ForwardEntry#external_port}
  */
  readonly externalPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#forward_entry_name ForwardEntry#forward_entry_name}
  */
  readonly forwardEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#forward_table_id ForwardEntry#forward_table_id}
  */
  readonly forwardTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#id ForwardEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#internal_ip ForwardEntry#internal_ip}
  */
  readonly internalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#internal_port ForwardEntry#internal_port}
  */
  readonly internalPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#ip_protocol ForwardEntry#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#name ForwardEntry#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#port_break ForwardEntry#port_break}
  */
  readonly portBreak?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#timeouts ForwardEntry#timeouts}
  */
  readonly timeouts?: ForwardEntryTimeouts;
}
export interface ForwardEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#create ForwardEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#delete ForwardEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#update ForwardEntry#update}
  */
  readonly update?: string;
}

export function forwardEntryTimeoutsToTerraform(struct?: ForwardEntryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function forwardEntryTimeoutsToHclTerraform(struct?: ForwardEntryTimeouts | cdktf.IResolvable): any {
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

export class ForwardEntryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardEntryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
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

  public set internalValue(value: ForwardEntryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry alicloud_forward_entry}
*/
export class ForwardEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_forward_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardEntry to import
  * @param importFromId The id of the existing ForwardEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_forward_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/forward_entry alicloud_forward_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardEntryConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_forward_entry',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalIp = config.externalIp;
    this._externalPort = config.externalPort;
    this._forwardEntryName = config.forwardEntryName;
    this._forwardTableId = config.forwardTableId;
    this._id = config.id;
    this._internalIp = config.internalIp;
    this._internalPort = config.internalPort;
    this._ipProtocol = config.ipProtocol;
    this._name = config.name;
    this._portBreak = config.portBreak;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_ip - computed: false, optional: false, required: true
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_port - computed: false, optional: false, required: true
  private _externalPort?: string; 
  public get externalPort() {
    return this.getStringAttribute('external_port');
  }
  public set externalPort(value: string) {
    this._externalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // forward_entry_id - computed: true, optional: false, required: false
  public get forwardEntryId() {
    return this.getStringAttribute('forward_entry_id');
  }

  // forward_entry_name - computed: true, optional: true, required: false
  private _forwardEntryName?: string; 
  public get forwardEntryName() {
    return this.getStringAttribute('forward_entry_name');
  }
  public set forwardEntryName(value: string) {
    this._forwardEntryName = value;
  }
  public resetForwardEntryName() {
    this._forwardEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardEntryNameInput() {
    return this._forwardEntryName;
  }

  // forward_table_id - computed: false, optional: false, required: true
  private _forwardTableId?: string; 
  public get forwardTableId() {
    return this.getStringAttribute('forward_table_id');
  }
  public set forwardTableId(value: string) {
    this._forwardTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTableIdInput() {
    return this._forwardTableId;
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

  // internal_ip - computed: false, optional: false, required: true
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // internal_port - computed: false, optional: false, required: true
  private _internalPort?: string; 
  public get internalPort() {
    return this.getStringAttribute('internal_port');
  }
  public set internalPort(value: string) {
    this._internalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port_break - computed: false, optional: true, required: false
  private _portBreak?: boolean | cdktf.IResolvable; 
  public get portBreak() {
    return this.getBooleanAttribute('port_break');
  }
  public set portBreak(value: boolean | cdktf.IResolvable) {
    this._portBreak = value;
  }
  public resetPortBreak() {
    this._portBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBreakInput() {
    return this._portBreak;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ForwardEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ForwardEntryTimeouts) {
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
      external_ip: cdktf.stringToTerraform(this._externalIp),
      external_port: cdktf.stringToTerraform(this._externalPort),
      forward_entry_name: cdktf.stringToTerraform(this._forwardEntryName),
      forward_table_id: cdktf.stringToTerraform(this._forwardTableId),
      id: cdktf.stringToTerraform(this._id),
      internal_ip: cdktf.stringToTerraform(this._internalIp),
      internal_port: cdktf.stringToTerraform(this._internalPort),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      name: cdktf.stringToTerraform(this._name),
      port_break: cdktf.booleanToTerraform(this._portBreak),
      timeouts: forwardEntryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_ip: {
        value: cdktf.stringToHclTerraform(this._externalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_port: {
        value: cdktf.stringToHclTerraform(this._externalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_entry_name: {
        value: cdktf.stringToHclTerraform(this._forwardEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_table_id: {
        value: cdktf.stringToHclTerraform(this._forwardTableId),
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
      internal_ip: {
        value: cdktf.stringToHclTerraform(this._internalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_port: {
        value: cdktf.stringToHclTerraform(this._internalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
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
      port_break: {
        value: cdktf.booleanToHclTerraform(this._portBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: forwardEntryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardEntryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

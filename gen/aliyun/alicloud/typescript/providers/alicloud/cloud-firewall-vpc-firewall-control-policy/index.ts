// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallVpcFirewallControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#acl_action CloudFirewallVpcFirewallControlPolicy#acl_action}
  */
  readonly aclAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#application_name CloudFirewallVpcFirewallControlPolicy#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#description CloudFirewallVpcFirewallControlPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#dest_port CloudFirewallVpcFirewallControlPolicy#dest_port}
  */
  readonly destPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#dest_port_group CloudFirewallVpcFirewallControlPolicy#dest_port_group}
  */
  readonly destPortGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#dest_port_type CloudFirewallVpcFirewallControlPolicy#dest_port_type}
  */
  readonly destPortType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#destination CloudFirewallVpcFirewallControlPolicy#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#destination_type CloudFirewallVpcFirewallControlPolicy#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#id CloudFirewallVpcFirewallControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#lang CloudFirewallVpcFirewallControlPolicy#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#member_uid CloudFirewallVpcFirewallControlPolicy#member_uid}
  */
  readonly memberUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#order CloudFirewallVpcFirewallControlPolicy#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#proto CloudFirewallVpcFirewallControlPolicy#proto}
  */
  readonly proto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#release CloudFirewallVpcFirewallControlPolicy#release}
  */
  readonly release?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#source CloudFirewallVpcFirewallControlPolicy#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#source_type CloudFirewallVpcFirewallControlPolicy#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#vpc_firewall_id CloudFirewallVpcFirewallControlPolicy#vpc_firewall_id}
  */
  readonly vpcFirewallId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#timeouts CloudFirewallVpcFirewallControlPolicy#timeouts}
  */
  readonly timeouts?: CloudFirewallVpcFirewallControlPolicyTimeouts;
}
export interface CloudFirewallVpcFirewallControlPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#create CloudFirewallVpcFirewallControlPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#delete CloudFirewallVpcFirewallControlPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#update CloudFirewallVpcFirewallControlPolicy#update}
  */
  readonly update?: string;
}

export function cloudFirewallVpcFirewallControlPolicyTimeoutsToTerraform(struct?: CloudFirewallVpcFirewallControlPolicyTimeouts | cdktf.IResolvable): any {
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


export function cloudFirewallVpcFirewallControlPolicyTimeoutsToHclTerraform(struct?: CloudFirewallVpcFirewallControlPolicyTimeouts | cdktf.IResolvable): any {
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

export class CloudFirewallVpcFirewallControlPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallVpcFirewallControlPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudFirewallVpcFirewallControlPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy alicloud_cloud_firewall_vpc_firewall_control_policy}
*/
export class CloudFirewallVpcFirewallControlPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_firewall_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallVpcFirewallControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallVpcFirewallControlPolicy to import
  * @param importFromId The id of the existing CloudFirewallVpcFirewallControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallVpcFirewallControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_firewall_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_control_policy alicloud_cloud_firewall_vpc_firewall_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallVpcFirewallControlPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallVpcFirewallControlPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_firewall_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclAction = config.aclAction;
    this._applicationName = config.applicationName;
    this._description = config.description;
    this._destPort = config.destPort;
    this._destPortGroup = config.destPortGroup;
    this._destPortType = config.destPortType;
    this._destination = config.destination;
    this._destinationType = config.destinationType;
    this._id = config.id;
    this._lang = config.lang;
    this._memberUid = config.memberUid;
    this._order = config.order;
    this._proto = config.proto;
    this._release = config.release;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._vpcFirewallId = config.vpcFirewallId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_action - computed: false, optional: false, required: true
  private _aclAction?: string; 
  public get aclAction() {
    return this.getStringAttribute('acl_action');
  }
  public set aclAction(value: string) {
    this._aclAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclActionInput() {
    return this._aclAction;
  }

  // acl_uuid - computed: true, optional: false, required: false
  public get aclUuid() {
    return this.getStringAttribute('acl_uuid');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dest_port - computed: true, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_port_group - computed: false, optional: true, required: false
  private _destPortGroup?: string; 
  public get destPortGroup() {
    return this.getStringAttribute('dest_port_group');
  }
  public set destPortGroup(value: string) {
    this._destPortGroup = value;
  }
  public resetDestPortGroup() {
    this._destPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortGroupInput() {
    return this._destPortGroup;
  }

  // dest_port_group_ports - computed: true, optional: false, required: false
  public get destPortGroupPorts() {
    return this.getListAttribute('dest_port_group_ports');
  }

  // dest_port_type - computed: true, optional: true, required: false
  private _destPortType?: string; 
  public get destPortType() {
    return this.getStringAttribute('dest_port_type');
  }
  public set destPortType(value: string) {
    this._destPortType = value;
  }
  public resetDestPortType() {
    this._destPortType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortTypeInput() {
    return this._destPortType;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_group_cidrs - computed: true, optional: false, required: false
  public get destinationGroupCidrs() {
    return this.getListAttribute('destination_group_cidrs');
  }

  // destination_group_type - computed: true, optional: false, required: false
  public get destinationGroupType() {
    return this.getStringAttribute('destination_group_type');
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // hit_times - computed: true, optional: false, required: false
  public get hitTimes() {
    return this.getNumberAttribute('hit_times');
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // member_uid - computed: true, optional: true, required: false
  private _memberUid?: string; 
  public get memberUid() {
    return this.getStringAttribute('member_uid');
  }
  public set memberUid(value: string) {
    this._memberUid = value;
  }
  public resetMemberUid() {
    this._memberUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUidInput() {
    return this._memberUid;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // release - computed: true, optional: true, required: false
  private _release?: boolean | cdktf.IResolvable; 
  public get release() {
    return this.getBooleanAttribute('release');
  }
  public set release(value: boolean | cdktf.IResolvable) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_group_cidrs - computed: true, optional: false, required: false
  public get sourceGroupCidrs() {
    return this.getListAttribute('source_group_cidrs');
  }

  // source_group_type - computed: true, optional: false, required: false
  public get sourceGroupType() {
    return this.getStringAttribute('source_group_type');
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // vpc_firewall_id - computed: false, optional: false, required: true
  private _vpcFirewallId?: string; 
  public get vpcFirewallId() {
    return this.getStringAttribute('vpc_firewall_id');
  }
  public set vpcFirewallId(value: string) {
    this._vpcFirewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFirewallIdInput() {
    return this._vpcFirewallId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallVpcFirewallControlPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallVpcFirewallControlPolicyTimeouts) {
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
      acl_action: cdktf.stringToTerraform(this._aclAction),
      application_name: cdktf.stringToTerraform(this._applicationName),
      description: cdktf.stringToTerraform(this._description),
      dest_port: cdktf.stringToTerraform(this._destPort),
      dest_port_group: cdktf.stringToTerraform(this._destPortGroup),
      dest_port_type: cdktf.stringToTerraform(this._destPortType),
      destination: cdktf.stringToTerraform(this._destination),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      member_uid: cdktf.stringToTerraform(this._memberUid),
      order: cdktf.numberToTerraform(this._order),
      proto: cdktf.stringToTerraform(this._proto),
      release: cdktf.booleanToTerraform(this._release),
      source: cdktf.stringToTerraform(this._source),
      source_type: cdktf.stringToTerraform(this._sourceType),
      vpc_firewall_id: cdktf.stringToTerraform(this._vpcFirewallId),
      timeouts: cloudFirewallVpcFirewallControlPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_action: {
        value: cdktf.stringToHclTerraform(this._aclAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
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
      dest_port: {
        value: cdktf.stringToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port_group: {
        value: cdktf.stringToHclTerraform(this._destPortGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port_type: {
        value: cdktf.stringToHclTerraform(this._destPortType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_uid: {
        value: cdktf.stringToHclTerraform(this._memberUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.booleanToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_firewall_id: {
        value: cdktf.stringToHclTerraform(this._vpcFirewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudFirewallVpcFirewallControlPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallVpcFirewallControlPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

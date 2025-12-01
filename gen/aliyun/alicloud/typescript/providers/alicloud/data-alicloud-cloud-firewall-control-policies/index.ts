// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudFirewallControlPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#acl_action DataAlicloudCloudFirewallControlPolicies#acl_action}
  */
  readonly aclAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#acl_uuid DataAlicloudCloudFirewallControlPolicies#acl_uuid}
  */
  readonly aclUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#description DataAlicloudCloudFirewallControlPolicies#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#destination DataAlicloudCloudFirewallControlPolicies#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#direction DataAlicloudCloudFirewallControlPolicies#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#id DataAlicloudCloudFirewallControlPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#ip_version DataAlicloudCloudFirewallControlPolicies#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#lang DataAlicloudCloudFirewallControlPolicies#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#output_file DataAlicloudCloudFirewallControlPolicies#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#proto DataAlicloudCloudFirewallControlPolicies#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#source DataAlicloudCloudFirewallControlPolicies#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#source_ip DataAlicloudCloudFirewallControlPolicies#source_ip}
  */
  readonly sourceIp?: string;
}
export interface DataAlicloudCloudFirewallControlPoliciesPolicies {
}

export function dataAlicloudCloudFirewallControlPoliciesPoliciesToTerraform(struct?: DataAlicloudCloudFirewallControlPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallControlPoliciesPoliciesToHclTerraform(struct?: DataAlicloudCloudFirewallControlPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallControlPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCloudFirewallControlPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallControlPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_action - computed: true, optional: false, required: false
  public get aclAction() {
    return this.getStringAttribute('acl_action');
  }

  // acl_uuid - computed: true, optional: false, required: false
  public get aclUuid() {
    return this.getStringAttribute('acl_uuid');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // dest_port_group - computed: true, optional: false, required: false
  public get destPortGroup() {
    return this.getStringAttribute('dest_port_group');
  }

  // dest_port_group_ports - computed: true, optional: false, required: false
  public get destPortGroupPorts() {
    return this.getListAttribute('dest_port_group_ports');
  }

  // dest_port_type - computed: true, optional: false, required: false
  public get destPortType() {
    return this.getStringAttribute('dest_port_type');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_group_cidrs - computed: true, optional: false, required: false
  public get destinationGroupCidrs() {
    return this.getListAttribute('destination_group_cidrs');
  }

  // destination_group_type - computed: true, optional: false, required: false
  public get destinationGroupType() {
    return this.getStringAttribute('destination_group_type');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // dns_result - computed: true, optional: false, required: false
  public get dnsResult() {
    return this.getStringAttribute('dns_result');
  }

  // dns_result_time - computed: true, optional: false, required: false
  public get dnsResultTime() {
    return this.getStringAttribute('dns_result_time');
  }

  // hit_times - computed: true, optional: false, required: false
  public get hitTimes() {
    return this.getStringAttribute('hit_times');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getStringAttribute('proto');
  }

  // release - computed: true, optional: false, required: false
  public get release() {
    return this.getBooleanAttribute('release');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_group_cidrs - computed: true, optional: false, required: false
  public get sourceGroupCidrs() {
    return this.getListAttribute('source_group_cidrs');
  }

  // source_group_type - computed: true, optional: false, required: false
  public get sourceGroupType() {
    return this.getStringAttribute('source_group_type');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataAlicloudCloudFirewallControlPoliciesPoliciesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCloudFirewallControlPoliciesPoliciesOutputReference {
    return new DataAlicloudCloudFirewallControlPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies alicloud_cloud_firewall_control_policies}
*/
export class DataAlicloudCloudFirewallControlPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_control_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudFirewallControlPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudFirewallControlPolicies to import
  * @param importFromId The id of the existing DataAlicloudCloudFirewallControlPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudFirewallControlPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_control_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_control_policies alicloud_cloud_firewall_control_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudFirewallControlPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudFirewallControlPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_control_policies',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._aclUuid = config.aclUuid;
    this._description = config.description;
    this._destination = config.destination;
    this._direction = config.direction;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._lang = config.lang;
    this._outputFile = config.outputFile;
    this._proto = config.proto;
    this._source = config.source;
    this._sourceIp = config.sourceIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_action - computed: false, optional: true, required: false
  private _aclAction?: string; 
  public get aclAction() {
    return this.getStringAttribute('acl_action');
  }
  public set aclAction(value: string) {
    this._aclAction = value;
  }
  public resetAclAction() {
    this._aclAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclActionInput() {
    return this._aclAction;
  }

  // acl_uuid - computed: false, optional: true, required: false
  private _aclUuid?: string; 
  public get aclUuid() {
    return this.getStringAttribute('acl_uuid');
  }
  public set aclUuid(value: string) {
    this._aclUuid = value;
  }
  public resetAclUuid() {
    this._aclUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclUuidInput() {
    return this._aclUuid;
  }

  // description - computed: false, optional: true, required: false
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

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAlicloudCloudFirewallControlPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // proto - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_action: cdktf.stringToTerraform(this._aclAction),
      acl_uuid: cdktf.stringToTerraform(this._aclUuid),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      lang: cdktf.stringToTerraform(this._lang),
      output_file: cdktf.stringToTerraform(this._outputFile),
      proto: cdktf.stringToTerraform(this._proto),
      source: cdktf.stringToTerraform(this._source),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
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
      acl_uuid: {
        value: cdktf.stringToHclTerraform(this._aclUuid),
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
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

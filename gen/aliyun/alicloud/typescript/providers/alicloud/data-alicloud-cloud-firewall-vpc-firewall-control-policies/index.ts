// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudFirewallVpcFirewallControlPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#acl_action DataAlicloudCloudFirewallVpcFirewallControlPolicies#acl_action}
  */
  readonly aclAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#acl_uuid DataAlicloudCloudFirewallVpcFirewallControlPolicies#acl_uuid}
  */
  readonly aclUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#description DataAlicloudCloudFirewallVpcFirewallControlPolicies#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#destination DataAlicloudCloudFirewallVpcFirewallControlPolicies#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#id DataAlicloudCloudFirewallVpcFirewallControlPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#ids DataAlicloudCloudFirewallVpcFirewallControlPolicies#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#lang DataAlicloudCloudFirewallVpcFirewallControlPolicies#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#member_uid DataAlicloudCloudFirewallVpcFirewallControlPolicies#member_uid}
  */
  readonly memberUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#output_file DataAlicloudCloudFirewallVpcFirewallControlPolicies#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#page_number DataAlicloudCloudFirewallVpcFirewallControlPolicies#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#page_size DataAlicloudCloudFirewallVpcFirewallControlPolicies#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#proto DataAlicloudCloudFirewallVpcFirewallControlPolicies#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#release DataAlicloudCloudFirewallVpcFirewallControlPolicies#release}
  */
  readonly release?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#source DataAlicloudCloudFirewallVpcFirewallControlPolicies#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#vpc_firewall_id DataAlicloudCloudFirewallVpcFirewallControlPolicies#vpc_firewall_id}
  */
  readonly vpcFirewallId: string;
}
export interface DataAlicloudCloudFirewallVpcFirewallControlPoliciesPolicies {
}

export function dataAlicloudCloudFirewallVpcFirewallControlPoliciesPoliciesToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallControlPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallControlPoliciesPoliciesToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallControlPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallControlPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallControlPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallControlPoliciesPolicies | undefined) {
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

  // hit_times - computed: true, optional: false, required: false
  public get hitTimes() {
    return this.getNumberAttribute('hit_times');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_uid - computed: true, optional: false, required: false
  public get memberUid() {
    return this.getStringAttribute('member_uid');
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

  // vpc_firewall_id - computed: true, optional: false, required: false
  public get vpcFirewallId() {
    return this.getStringAttribute('vpc_firewall_id');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallControlPoliciesPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallControlPoliciesPoliciesOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallControlPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies alicloud_cloud_firewall_vpc_firewall_control_policies}
*/
export class DataAlicloudCloudFirewallVpcFirewallControlPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_firewall_control_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudFirewallVpcFirewallControlPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudFirewallVpcFirewallControlPolicies to import
  * @param importFromId The id of the existing DataAlicloudCloudFirewallVpcFirewallControlPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudFirewallVpcFirewallControlPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_firewall_control_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cloud_firewall_vpc_firewall_control_policies alicloud_cloud_firewall_vpc_firewall_control_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudFirewallVpcFirewallControlPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudFirewallVpcFirewallControlPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_firewall_control_policies',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._id = config.id;
    this._ids = config.ids;
    this._lang = config.lang;
    this._memberUid = config.memberUid;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._proto = config.proto;
    this._release = config.release;
    this._source = config.source;
    this._vpcFirewallId = config.vpcFirewallId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
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

  // member_uid - computed: false, optional: true, required: false
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

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAlicloudCloudFirewallVpcFirewallControlPoliciesPoliciesList(this, "policies", false);
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

  // release - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_action: cdktf.stringToTerraform(this._aclAction),
      acl_uuid: cdktf.stringToTerraform(this._aclUuid),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      lang: cdktf.stringToTerraform(this._lang),
      member_uid: cdktf.stringToTerraform(this._memberUid),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      proto: cdktf.stringToTerraform(this._proto),
      release: cdktf.booleanToTerraform(this._release),
      source: cdktf.stringToTerraform(this._source),
      vpc_firewall_id: cdktf.stringToTerraform(this._vpcFirewallId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
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
      vpc_firewall_id: {
        value: cdktf.stringToHclTerraform(this._vpcFirewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverBusinessIntelligenceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of CPU cores of the instance you want to purchase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#cpu SqlserverBusinessIntelligenceInstance#cpu}
  */
  readonly cpu: number;
  /**
  * Supported versions of business intelligence server. Valid values: 201603 (SQL Server 2016 Integration Services), 201703 (SQL Server 2017 Integration Services), 201903 (SQL Server 2019 Integration Services). Default value: 201903. As the purchasable versions are region-specific, you can use the DescribeProductConfig API to query the information of purchasable versions in each region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#db_version SqlserverBusinessIntelligenceInstance#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#id SqlserverBusinessIntelligenceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#instance_name SqlserverBusinessIntelligenceInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * The host type of purchased instance. Valid values: CLOUD_PREMIUM (virtual machine with premium cloud disk), CLOUD_SSD (virtual machine with SSD).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#machine_type SqlserverBusinessIntelligenceInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Instance memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#memory SqlserverBusinessIntelligenceInstance#memory}
  */
  readonly memory: number;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#project_id SqlserverBusinessIntelligenceInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Security group list, which contains security group IDs in the format of sg-xxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#security_group_list SqlserverBusinessIntelligenceInstance#security_group_list}
  */
  readonly securityGroupList?: string[];
  /**
  * Configuration of the maintenance window, which specifies the maintenance duration in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#span SqlserverBusinessIntelligenceInstance#span}
  */
  readonly span?: number;
  /**
  * Configuration of the maintenance window, which specifies the start time of daily maintenance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#start_time SqlserverBusinessIntelligenceInstance#start_time}
  */
  readonly startTime?: string;
  /**
  * Instance disk size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#storage SqlserverBusinessIntelligenceInstance#storage}
  */
  readonly storage: number;
  /**
  * VPC subnet ID in the format of subnet-bdoe83fa. Both SubnetId and VpcId need to be set or unset at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#subnet_id SqlserverBusinessIntelligenceInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * VPC ID in the format of vpc-dsp338hz. Both SubnetId and VpcId need to be set or unset at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#vpc_id SqlserverBusinessIntelligenceInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Configuration of the maintenance window, which specifies the day of the week when maintenance can be performed. Valid values: 1 (Monday), 2 (Tuesday), 3 (Wednesday), 4 (Thursday), 5 (Friday), 6 (Saturday), 7 (Sunday).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#weekly SqlserverBusinessIntelligenceInstance#weekly}
  */
  readonly weekly?: number[];
  /**
  * Instance AZ, such as ap-guangzhou-1 (Guangzhou Zone 1). Purchasable AZs for an instance can be obtained through theDescribeZones API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#zone SqlserverBusinessIntelligenceInstance#zone}
  */
  readonly zone: string;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#resource_tags SqlserverBusinessIntelligenceInstance#resource_tags}
  */
  readonly resourceTags?: SqlserverBusinessIntelligenceInstanceResourceTags[] | cdktf.IResolvable;
}
export interface SqlserverBusinessIntelligenceInstanceResourceTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#tag_key SqlserverBusinessIntelligenceInstance#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#tag_value SqlserverBusinessIntelligenceInstance#tag_value}
  */
  readonly tagValue?: string;
}

export function sqlserverBusinessIntelligenceInstanceResourceTagsToTerraform(struct?: SqlserverBusinessIntelligenceInstanceResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function sqlserverBusinessIntelligenceInstanceResourceTagsToHclTerraform(struct?: SqlserverBusinessIntelligenceInstanceResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverBusinessIntelligenceInstanceResourceTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlserverBusinessIntelligenceInstanceResourceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverBusinessIntelligenceInstanceResourceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class SqlserverBusinessIntelligenceInstanceResourceTagsList extends cdktf.ComplexList {
  public internalValue? : SqlserverBusinessIntelligenceInstanceResourceTags[] | cdktf.IResolvable

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
  public get(index: number): SqlserverBusinessIntelligenceInstanceResourceTagsOutputReference {
    return new SqlserverBusinessIntelligenceInstanceResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance tencentcloud_sqlserver_business_intelligence_instance}
*/
export class SqlserverBusinessIntelligenceInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_business_intelligence_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverBusinessIntelligenceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverBusinessIntelligenceInstance to import
  * @param importFromId The id of the existing SqlserverBusinessIntelligenceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverBusinessIntelligenceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_business_intelligence_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/sqlserver_business_intelligence_instance tencentcloud_sqlserver_business_intelligence_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverBusinessIntelligenceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverBusinessIntelligenceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_business_intelligence_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpu = config.cpu;
    this._dbVersion = config.dbVersion;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._machineType = config.machineType;
    this._memory = config.memory;
    this._projectId = config.projectId;
    this._securityGroupList = config.securityGroupList;
    this._span = config.span;
    this._startTime = config.startTime;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._weekly = config.weekly;
    this._zone = config.zone;
    this._resourceTags.internalValue = config.resourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // security_group_list - computed: true, optional: true, required: false
  private _securityGroupList?: string[]; 
  public get securityGroupList() {
    return this.getListAttribute('security_group_list');
  }
  public set securityGroupList(value: string[]) {
    this._securityGroupList = value;
  }
  public resetSecurityGroupList() {
    this._securityGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupListInput() {
    return this._securityGroupList;
  }

  // span - computed: true, optional: true, required: false
  private _span?: number; 
  public get span() {
    return this.getNumberAttribute('span');
  }
  public set span(value: number) {
    this._span = value;
  }
  public resetSpan() {
    this._span = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly?: number[]; 
  public get weekly() {
    return this.getNumberListAttribute('weekly');
  }
  public set weekly(value: number[]) {
    this._weekly = value;
  }
  public resetWeekly() {
    this._weekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new SqlserverBusinessIntelligenceInstanceResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: SqlserverBusinessIntelligenceInstanceResourceTags[] | cdktf.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktf.numberToTerraform(this._cpu),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory: cdktf.numberToTerraform(this._memory),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupList),
      span: cdktf.numberToTerraform(this._span),
      start_time: cdktf.stringToTerraform(this._startTime),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      weekly: cdktf.listMapper(cdktf.numberToTerraform, false)(this._weekly),
      zone: cdktf.stringToTerraform(this._zone),
      resource_tags: cdktf.listMapper(sqlserverBusinessIntelligenceInstanceResourceTagsToTerraform, true)(this._resourceTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      span: {
        value: cdktf.numberToHclTerraform(this._span),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekly: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._weekly),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktf.listMapperHcl(sqlserverBusinessIntelligenceInstanceResourceTagsToHclTerraform, true)(this._resourceTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverBusinessIntelligenceInstanceResourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsFsxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#aws_credentials_name AwsFsx#aws_credentials_name}
  */
  readonly awsCredentialsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#endpoint_ip_address_range AwsFsx#endpoint_ip_address_range}
  */
  readonly endpointIpAddressRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#file_system_id AwsFsx#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#fsx_admin_password AwsFsx#fsx_admin_password}
  */
  readonly fsxAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#id AwsFsx#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#import_file_system AwsFsx#import_file_system}
  */
  readonly importFileSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#kms_key_id AwsFsx#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#minimum_ssd_iops AwsFsx#minimum_ssd_iops}
  */
  readonly minimumSsdIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#name AwsFsx#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#primary_subnet_id AwsFsx#primary_subnet_id}
  */
  readonly primarySubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#region AwsFsx#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#route_table_ids AwsFsx#route_table_ids}
  */
  readonly routeTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#secondary_subnet_id AwsFsx#secondary_subnet_id}
  */
  readonly secondarySubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#security_group_ids AwsFsx#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#storage_capacity_size AwsFsx#storage_capacity_size}
  */
  readonly storageCapacitySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#storage_capacity_size_unit AwsFsx#storage_capacity_size_unit}
  */
  readonly storageCapacitySizeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#tenant_id AwsFsx#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#throughput_capacity AwsFsx#throughput_capacity}
  */
  readonly throughputCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#workspace_id AwsFsx#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#tags AwsFsx#tags}
  */
  readonly tags?: AwsFsxTags[] | cdktf.IResolvable;
}
export interface AwsFsxTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#tag_key AwsFsx#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#tag_value AwsFsx#tag_value}
  */
  readonly tagValue?: string;
}

export function awsFsxTagsToTerraform(struct?: AwsFsxTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function awsFsxTagsToHclTerraform(struct?: AwsFsxTags | cdktf.IResolvable): any {
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

export class AwsFsxTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsFsxTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsFsxTags | cdktf.IResolvable | undefined) {
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

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
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

export class AwsFsxTagsList extends cdktf.ComplexList {
  public internalValue? : AwsFsxTags[] | cdktf.IResolvable

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
  public get(index: number): AwsFsxTagsOutputReference {
    return new AwsFsxTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx netapp-cloudmanager_aws_fsx}
*/
export class AwsFsx extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_aws_fsx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsFsx resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsFsx to import
  * @param importFromId The id of the existing AwsFsx that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsFsx to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_aws_fsx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/aws_fsx netapp-cloudmanager_aws_fsx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsFsxConfig
  */
  public constructor(scope: Construct, id: string, config: AwsFsxConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_aws_fsx',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0',
        providerVersionConstraint: '26.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsCredentialsName = config.awsCredentialsName;
    this._endpointIpAddressRange = config.endpointIpAddressRange;
    this._fileSystemId = config.fileSystemId;
    this._fsxAdminPassword = config.fsxAdminPassword;
    this._id = config.id;
    this._importFileSystem = config.importFileSystem;
    this._kmsKeyId = config.kmsKeyId;
    this._minimumSsdIops = config.minimumSsdIops;
    this._name = config.name;
    this._primarySubnetId = config.primarySubnetId;
    this._region = config.region;
    this._routeTableIds = config.routeTableIds;
    this._secondarySubnetId = config.secondarySubnetId;
    this._securityGroupIds = config.securityGroupIds;
    this._storageCapacitySize = config.storageCapacitySize;
    this._storageCapacitySizeUnit = config.storageCapacitySizeUnit;
    this._tenantId = config.tenantId;
    this._throughputCapacity = config.throughputCapacity;
    this._workspaceId = config.workspaceId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_credentials_name - computed: false, optional: false, required: true
  private _awsCredentialsName?: string; 
  public get awsCredentialsName() {
    return this.getStringAttribute('aws_credentials_name');
  }
  public set awsCredentialsName(value: string) {
    this._awsCredentialsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredentialsNameInput() {
    return this._awsCredentialsName;
  }

  // endpoint_ip_address_range - computed: false, optional: true, required: false
  private _endpointIpAddressRange?: string; 
  public get endpointIpAddressRange() {
    return this.getStringAttribute('endpoint_ip_address_range');
  }
  public set endpointIpAddressRange(value: string) {
    this._endpointIpAddressRange = value;
  }
  public resetEndpointIpAddressRange() {
    this._endpointIpAddressRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressRangeInput() {
    return this._endpointIpAddressRange;
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // fsx_admin_password - computed: false, optional: false, required: true
  private _fsxAdminPassword?: string; 
  public get fsxAdminPassword() {
    return this.getStringAttribute('fsx_admin_password');
  }
  public set fsxAdminPassword(value: string) {
    this._fsxAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxAdminPasswordInput() {
    return this._fsxAdminPassword;
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

  // import_file_system - computed: false, optional: true, required: false
  private _importFileSystem?: boolean | cdktf.IResolvable; 
  public get importFileSystem() {
    return this.getBooleanAttribute('import_file_system');
  }
  public set importFileSystem(value: boolean | cdktf.IResolvable) {
    this._importFileSystem = value;
  }
  public resetImportFileSystem() {
    this._importFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFileSystemInput() {
    return this._importFileSystem;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // minimum_ssd_iops - computed: false, optional: true, required: false
  private _minimumSsdIops?: number; 
  public get minimumSsdIops() {
    return this.getNumberAttribute('minimum_ssd_iops');
  }
  public set minimumSsdIops(value: number) {
    this._minimumSsdIops = value;
  }
  public resetMinimumSsdIops() {
    this._minimumSsdIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSsdIopsInput() {
    return this._minimumSsdIops;
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

  // primary_subnet_id - computed: false, optional: false, required: true
  private _primarySubnetId?: string; 
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }
  public set primarySubnetId(value: string) {
    this._primarySubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetIdInput() {
    return this._primarySubnetId;
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

  // route_table_ids - computed: false, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }

  // secondary_subnet_id - computed: false, optional: false, required: true
  private _secondarySubnetId?: string; 
  public get secondarySubnetId() {
    return this.getStringAttribute('secondary_subnet_id');
  }
  public set secondarySubnetId(value: string) {
    this._secondarySubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySubnetIdInput() {
    return this._secondarySubnetId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // storage_capacity_size - computed: false, optional: true, required: false
  private _storageCapacitySize?: number; 
  public get storageCapacitySize() {
    return this.getNumberAttribute('storage_capacity_size');
  }
  public set storageCapacitySize(value: number) {
    this._storageCapacitySize = value;
  }
  public resetStorageCapacitySize() {
    this._storageCapacitySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacitySizeInput() {
    return this._storageCapacitySize;
  }

  // storage_capacity_size_unit - computed: false, optional: true, required: false
  private _storageCapacitySizeUnit?: string; 
  public get storageCapacitySizeUnit() {
    return this.getStringAttribute('storage_capacity_size_unit');
  }
  public set storageCapacitySizeUnit(value: string) {
    this._storageCapacitySizeUnit = value;
  }
  public resetStorageCapacitySizeUnit() {
    this._storageCapacitySizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacitySizeUnitInput() {
    return this._storageCapacitySizeUnit;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // throughput_capacity - computed: false, optional: false, required: true
  private _throughputCapacity?: number; 
  public get throughputCapacity() {
    return this.getNumberAttribute('throughput_capacity');
  }
  public set throughputCapacity(value: number) {
    this._throughputCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputCapacityInput() {
    return this._throughputCapacity;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AwsFsxTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AwsFsxTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_credentials_name: cdktf.stringToTerraform(this._awsCredentialsName),
      endpoint_ip_address_range: cdktf.stringToTerraform(this._endpointIpAddressRange),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      fsx_admin_password: cdktf.stringToTerraform(this._fsxAdminPassword),
      id: cdktf.stringToTerraform(this._id),
      import_file_system: cdktf.booleanToTerraform(this._importFileSystem),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      minimum_ssd_iops: cdktf.numberToTerraform(this._minimumSsdIops),
      name: cdktf.stringToTerraform(this._name),
      primary_subnet_id: cdktf.stringToTerraform(this._primarySubnetId),
      region: cdktf.stringToTerraform(this._region),
      route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTableIds),
      secondary_subnet_id: cdktf.stringToTerraform(this._secondarySubnetId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      storage_capacity_size: cdktf.numberToTerraform(this._storageCapacitySize),
      storage_capacity_size_unit: cdktf.stringToTerraform(this._storageCapacitySizeUnit),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      tags: cdktf.listMapper(awsFsxTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_credentials_name: {
        value: cdktf.stringToHclTerraform(this._awsCredentialsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_ip_address_range: {
        value: cdktf.stringToHclTerraform(this._endpointIpAddressRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsx_admin_password: {
        value: cdktf.stringToHclTerraform(this._fsxAdminPassword),
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
      import_file_system: {
        value: cdktf.booleanToHclTerraform(this._importFileSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_ssd_iops: {
        value: cdktf.numberToHclTerraform(this._minimumSsdIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_subnet_id: {
        value: cdktf.stringToHclTerraform(this._primarySubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTableIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secondary_subnet_id: {
        value: cdktf.stringToHclTerraform(this._secondarySubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      storage_capacity_size: {
        value: cdktf.numberToHclTerraform(this._storageCapacitySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_capacity_size_unit: {
        value: cdktf.stringToHclTerraform(this._storageCapacitySizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput_capacity: {
        value: cdktf.numberToHclTerraform(this._throughputCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(awsFsxTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsFsxTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

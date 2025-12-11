// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcDatasourceHouseAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Engine name, only one engine can be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#data_engine_names DlcDatasourceHouseAttachment#data_engine_names}
  */
  readonly dataEngineNames: string[];
  /**
  * Network configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#datasource_connection_name DlcDatasourceHouseAttachment#datasource_connection_name}
  */
  readonly datasourceConnectionName: string;
  /**
  * Data source type. Allow value: Mysql, HiveCos, HiveHdfs, HiveCHdfs, Kafka, OtherDatasourceConnection, PostgreSql, SqlServer, ClickHouse, Elasticsearch, TDSQLPostgreSql, TCHouseD, TccHive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#datasource_connection_type DlcDatasourceHouseAttachment#datasource_connection_type}
  */
  readonly datasourceConnectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#id DlcDatasourceHouseAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network configuration description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#network_connection_desc DlcDatasourceHouseAttachment#network_connection_desc}
  */
  readonly networkConnectionDesc?: string;
  /**
  * Network type, 2-cross-source type, 4-enhanced type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#network_connection_type DlcDatasourceHouseAttachment#network_connection_type}
  */
  readonly networkConnectionType: number;
  /**
  * datasource_connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#datasource_connection_config DlcDatasourceHouseAttachment#datasource_connection_config}
  */
  readonly datasourceConnectionConfig: DlcDatasourceHouseAttachmentDatasourceConnectionConfig;
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouse {
  /**
  * Default database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Unique ID of the data source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Name of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo {
  /**
  * IP information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#ip DlcDatasourceHouseAttachment#ip}
  */
  readonly ip?: string;
  /**
  * Port information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#port DlcDatasourceHouseAttachment#port}
  */
  readonly port?: number;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoList extends cdktf.ComplexList {
  public internalValue? : DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo[] | cdktf.IResolvable

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
  public get(index: number): DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoOutputReference {
    return new DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearch {
  /**
  * Default database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Data source ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Data source name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocation;
  /**
  * service_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#service_info DlcDatasourceHouseAttachment#service_info}
  */
  readonly serviceInfo?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo[] | cdktf.IResolvable;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationToTerraform(struct!.location),
    service_info: cdktf.listMapper(dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoToTerraform, true)(struct!.serviceInfo),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationList",
    },
    service_info: {
      value: cdktf.listMapperHcl(dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoToHclTerraform, true)(struct!.serviceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._serviceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInfo = this._serviceInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
      this._serviceInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
      this._serviceInfo.internalValue = value.serviceInfo;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // service_info - computed: false, optional: true, required: false
  private _serviceInfo = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfoList(this, "service_info", false);
  public get serviceInfo() {
    return this._serviceInfo;
  }
  public putServiceInfo(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchServiceInfo[] | cdktf.IResolvable) {
    this._serviceInfo.internalValue = value;
  }
  public resetServiceInfo() {
    this._serviceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInfoInput() {
    return this._serviceInfo.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfo {
  /**
  * KeyTab file value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#key_tab DlcDatasourceHouseAttachment#key_tab}
  */
  readonly keyTab?: string;
  /**
  * Krb5Conf file value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#krb5_conf DlcDatasourceHouseAttachment#krb5_conf}
  */
  readonly krb5Conf?: string;
  /**
  * Service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#service_principal DlcDatasourceHouseAttachment#service_principal}
  */
  readonly servicePrincipal?: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_tab: cdktf.stringToTerraform(struct!.keyTab),
    krb5_conf: cdktf.stringToTerraform(struct!.krb5Conf),
    service_principal: cdktf.stringToTerraform(struct!.servicePrincipal),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_tab: {
      value: cdktf.stringToHclTerraform(struct!.keyTab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    krb5_conf: {
      value: cdktf.stringToHclTerraform(struct!.krb5Conf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTab = this._keyTab;
    }
    if (this._krb5Conf !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5Conf = this._krb5Conf;
    }
    if (this._servicePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipal = this._servicePrincipal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyTab = undefined;
      this._krb5Conf = undefined;
      this._servicePrincipal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyTab = value.keyTab;
      this._krb5Conf = value.krb5Conf;
      this._servicePrincipal = value.servicePrincipal;
    }
  }

  // key_tab - computed: false, optional: true, required: false
  private _keyTab?: string; 
  public get keyTab() {
    return this.getStringAttribute('key_tab');
  }
  public set keyTab(value: string) {
    this._keyTab = value;
  }
  public resetKeyTab() {
    this._keyTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTabInput() {
    return this._keyTab;
  }

  // krb5_conf - computed: false, optional: true, required: false
  private _krb5Conf?: string; 
  public get krb5Conf() {
    return this.getStringAttribute('krb5_conf');
  }
  public set krb5Conf(value: string) {
    this._krb5Conf = value;
  }
  public resetKrb5Conf() {
    this._krb5Conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ConfInput() {
    return this._krb5Conf;
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysql {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Database instance ID, consistent with the database side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Database instance name, consistent with the database side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigHive {
  /**
  * If the type is COS, COS bucket connection needs to be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#bucket_url DlcDatasourceHouseAttachment#bucket_url}
  */
  readonly bucketUrl?: string;
  /**
  * JSON string. If the type is HDFS, this field needs to be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#hdfs_properties DlcDatasourceHouseAttachment#hdfs_properties}
  */
  readonly hdfsProperties?: string;
  /**
  * If the type is HDFS, high availability needs to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#high_availability DlcDatasourceHouseAttachment#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * Version number of Hive component in EMR cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#hive_version DlcDatasourceHouseAttachment#hive_version}
  */
  readonly hiveVersion?: string;
  /**
  * EMR cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * EMR cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Whether to enable Kerberos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#kerberos_enable DlcDatasourceHouseAttachment#kerberos_enable}
  */
  readonly kerberosEnable?: boolean | cdktf.IResolvable;
  /**
  * Address of Hive metastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#meta_store_url DlcDatasourceHouseAttachment#meta_store_url}
  */
  readonly metaStoreUrl: string;
  /**
  * Hive data source type, representing data storage location, COS or HDFS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#type DlcDatasourceHouseAttachment#type}
  */
  readonly type: string;
  /**
  * kerberos_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#kerberos_info DlcDatasourceHouseAttachment#kerberos_info}
  */
  readonly kerberosInfo?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfo;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocation;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#mysql DlcDatasourceHouseAttachment#mysql}
  */
  readonly mysql?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysql;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_url: cdktf.stringToTerraform(struct!.bucketUrl),
    hdfs_properties: cdktf.stringToTerraform(struct!.hdfsProperties),
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    hive_version: cdktf.stringToTerraform(struct!.hiveVersion),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    kerberos_enable: cdktf.booleanToTerraform(struct!.kerberosEnable),
    meta_store_url: cdktf.stringToTerraform(struct!.metaStoreUrl),
    type: cdktf.stringToTerraform(struct!.type),
    kerberos_info: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoToTerraform(struct!.kerberosInfo),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationToTerraform(struct!.location),
    mysql: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlToTerraform(struct!.mysql),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_url: {
      value: cdktf.stringToHclTerraform(struct!.bucketUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdfs_properties: {
      value: cdktf.stringToHclTerraform(struct!.hdfsProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.highAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hive_version: {
      value: cdktf.stringToHclTerraform(struct!.hiveVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_enable: {
      value: cdktf.booleanToHclTerraform(struct!.kerberosEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    meta_store_url: {
      value: cdktf.stringToHclTerraform(struct!.metaStoreUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_info: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoToHclTerraform(struct!.kerberosInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoList",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationList",
    },
    mysql: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigHive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUrl = this._bucketUrl;
    }
    if (this._hdfsProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsProperties = this._hdfsProperties;
    }
    if (this._highAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability;
    }
    if (this._hiveVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveVersion = this._hiveVersion;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._kerberosEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosEnable = this._kerberosEnable;
    }
    if (this._metaStoreUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaStoreUrl = this._metaStoreUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._kerberosInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosInfo = this._kerberosInfo?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketUrl = undefined;
      this._hdfsProperties = undefined;
      this._highAvailability = undefined;
      this._hiveVersion = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._kerberosEnable = undefined;
      this._metaStoreUrl = undefined;
      this._type = undefined;
      this._kerberosInfo.internalValue = undefined;
      this._location.internalValue = undefined;
      this._mysql.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketUrl = value.bucketUrl;
      this._hdfsProperties = value.hdfsProperties;
      this._highAvailability = value.highAvailability;
      this._hiveVersion = value.hiveVersion;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._kerberosEnable = value.kerberosEnable;
      this._metaStoreUrl = value.metaStoreUrl;
      this._type = value.type;
      this._kerberosInfo.internalValue = value.kerberosInfo;
      this._location.internalValue = value.location;
      this._mysql.internalValue = value.mysql;
    }
  }

  // bucket_url - computed: false, optional: true, required: false
  private _bucketUrl?: string; 
  public get bucketUrl() {
    return this.getStringAttribute('bucket_url');
  }
  public set bucketUrl(value: string) {
    this._bucketUrl = value;
  }
  public resetBucketUrl() {
    this._bucketUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUrlInput() {
    return this._bucketUrl;
  }

  // hdfs_properties - computed: false, optional: true, required: false
  private _hdfsProperties?: string; 
  public get hdfsProperties() {
    return this.getStringAttribute('hdfs_properties');
  }
  public set hdfsProperties(value: string) {
    this._hdfsProperties = value;
  }
  public resetHdfsProperties() {
    this._hdfsProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsPropertiesInput() {
    return this._hdfsProperties;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: boolean | cdktf.IResolvable; 
  public get highAvailability() {
    return this.getBooleanAttribute('high_availability');
  }
  public set highAvailability(value: boolean | cdktf.IResolvable) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // hive_version - computed: false, optional: true, required: false
  private _hiveVersion?: string; 
  public get hiveVersion() {
    return this.getStringAttribute('hive_version');
  }
  public set hiveVersion(value: string) {
    this._hiveVersion = value;
  }
  public resetHiveVersion() {
    this._hiveVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveVersionInput() {
    return this._hiveVersion;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // kerberos_enable - computed: false, optional: true, required: false
  private _kerberosEnable?: boolean | cdktf.IResolvable; 
  public get kerberosEnable() {
    return this.getBooleanAttribute('kerberos_enable');
  }
  public set kerberosEnable(value: boolean | cdktf.IResolvable) {
    this._kerberosEnable = value;
  }
  public resetKerberosEnable() {
    this._kerberosEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosEnableInput() {
    return this._kerberosEnable;
  }

  // meta_store_url - computed: false, optional: false, required: true
  private _metaStoreUrl?: string; 
  public get metaStoreUrl() {
    return this.getStringAttribute('meta_store_url');
  }
  public set metaStoreUrl(value: string) {
    this._metaStoreUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaStoreUrlInput() {
    return this._metaStoreUrl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // kerberos_info - computed: false, optional: true, required: false
  private _kerberosInfo = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfoOutputReference(this, "kerberos_info");
  public get kerberosInfo() {
    return this._kerberosInfo;
  }
  public putKerberosInfo(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveKerberosInfo) {
    this._kerberosInfo.internalValue = value;
  }
  public resetKerberosInfo() {
    this._kerberosInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInfoInput() {
    return this._kerberosInfo.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafka {
  /**
  * Kafka instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceId = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceId = value.instanceId;
      this._location.internalValue = value.location;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysql {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Database instance ID, consistent with the database side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Database instance name, consistent with the database side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnection {
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location.internalValue = value.location;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSql {
  /**
  * Default database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Unique ID of the data source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Name of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServer {
  /**
  * Default database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Unique ID of the data source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Name of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseD {
  /**
  * Access information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#access_info DlcDatasourceHouseAttachment#access_info}
  */
  readonly accessInfo?: string;
  /**
  * Default database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Unique ID of the data source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Data source name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseD): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_info: cdktf.stringToTerraform(struct!.accessInfo),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseD): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_info: {
      value: cdktf.stringToHclTerraform(struct!.accessInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseD | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessInfo = this._accessInfo;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseD | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessInfo = undefined;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessInfo = value.accessInfo;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
    }
  }

  // access_info - computed: false, optional: true, required: false
  private _accessInfo?: string; 
  public get accessInfo() {
    return this.getStringAttribute('access_info');
  }
  public set accessInfo(value: string) {
    this._accessInfo = value;
  }
  public resetAccessInfo() {
    this._accessInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInfoInput() {
    return this._accessInfo;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnection {
  /**
  * Service CLB IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#clb_ip DlcDatasourceHouseAttachment#clb_ip}
  */
  readonly clbIp?: string;
  /**
  * Service CLB port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#clb_port DlcDatasourceHouseAttachment#clb_port}
  */
  readonly clbPort?: string;
  /**
  * Subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock?: string;
  /**
  * Subnet instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * VPC CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock?: string;
  /**
  * VPC instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId?: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clb_ip: cdktf.stringToTerraform(struct!.clbIp),
    clb_port: cdktf.stringToTerraform(struct!.clbPort),
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clb_ip: {
      value: cdktf.stringToHclTerraform(struct!.clbIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clb_port: {
      value: cdktf.stringToHclTerraform(struct!.clbPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clbIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clbIp = this._clbIp;
    }
    if (this._clbPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.clbPort = this._clbPort;
    }
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clbIp = undefined;
      this._clbPort = undefined;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clbIp = value.clbIp;
      this._clbPort = value.clbPort;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // clb_ip - computed: false, optional: true, required: false
  private _clbIp?: string; 
  public get clbIp() {
    return this.getStringAttribute('clb_ip');
  }
  public set clbIp(value: string) {
    this._clbIp = value;
  }
  public resetClbIp() {
    this._clbIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clbIpInput() {
    return this._clbIp;
  }

  // clb_port - computed: false, optional: true, required: false
  private _clbPort?: string; 
  public get clbPort() {
    return this.getStringAttribute('clb_port');
  }
  public set clbPort(value: string) {
    this._clbPort = value;
  }
  public resetClbPort() {
    this._clbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clbPortInput() {
    return this._clbPort;
  }

  // subnet_cidr_block - computed: false, optional: true, required: false
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  public resetSubnetCidrBlock() {
    this._subnetCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: true, required: false
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

  // vpc_cidr_block - computed: false, optional: true, required: false
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  public resetVpcCidrBlock() {
    this._vpcCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: true, required: false
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
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHive {
  /**
  * Endpoint service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#endpoint_service_id DlcDatasourceHouseAttachment#endpoint_service_id}
  */
  readonly endpointServiceId?: string;
  /**
  * Hive version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#hive_version DlcDatasourceHouseAttachment#hive_version}
  */
  readonly hiveVersion?: string;
  /**
  * HMS endpoint service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#hms_endpoint_service_id DlcDatasourceHouseAttachment#hms_endpoint_service_id}
  */
  readonly hmsEndpointServiceId?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Thrift connection address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#meta_store_url DlcDatasourceHouseAttachment#meta_store_url}
  */
  readonly metaStoreUrl?: string;
  /**
  * tcc_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#tcc_connection DlcDatasourceHouseAttachment#tcc_connection}
  */
  readonly tccConnection?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnection;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_service_id: cdktf.stringToTerraform(struct!.endpointServiceId),
    hive_version: cdktf.stringToTerraform(struct!.hiveVersion),
    hms_endpoint_service_id: cdktf.stringToTerraform(struct!.hmsEndpointServiceId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    meta_store_url: cdktf.stringToTerraform(struct!.metaStoreUrl),
    tcc_connection: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionToTerraform(struct!.tccConnection),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hive_version: {
      value: cdktf.stringToHclTerraform(struct!.hiveVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hms_endpoint_service_id: {
      value: cdktf.stringToHclTerraform(struct!.hmsEndpointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta_store_url: {
      value: cdktf.stringToHclTerraform(struct!.metaStoreUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcc_connection: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionToHclTerraform(struct!.tccConnection),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointServiceId = this._endpointServiceId;
    }
    if (this._hiveVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveVersion = this._hiveVersion;
    }
    if (this._hmsEndpointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmsEndpointServiceId = this._hmsEndpointServiceId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._metaStoreUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaStoreUrl = this._metaStoreUrl;
    }
    if (this._tccConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tccConnection = this._tccConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointServiceId = undefined;
      this._hiveVersion = undefined;
      this._hmsEndpointServiceId = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._metaStoreUrl = undefined;
      this._tccConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointServiceId = value.endpointServiceId;
      this._hiveVersion = value.hiveVersion;
      this._hmsEndpointServiceId = value.hmsEndpointServiceId;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._metaStoreUrl = value.metaStoreUrl;
      this._tccConnection.internalValue = value.tccConnection;
    }
  }

  // endpoint_service_id - computed: false, optional: true, required: false
  private _endpointServiceId?: string; 
  public get endpointServiceId() {
    return this.getStringAttribute('endpoint_service_id');
  }
  public set endpointServiceId(value: string) {
    this._endpointServiceId = value;
  }
  public resetEndpointServiceId() {
    this._endpointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceIdInput() {
    return this._endpointServiceId;
  }

  // hive_version - computed: false, optional: true, required: false
  private _hiveVersion?: string; 
  public get hiveVersion() {
    return this.getStringAttribute('hive_version');
  }
  public set hiveVersion(value: string) {
    this._hiveVersion = value;
  }
  public resetHiveVersion() {
    this._hiveVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveVersionInput() {
    return this._hiveVersion;
  }

  // hms_endpoint_service_id - computed: false, optional: true, required: false
  private _hmsEndpointServiceId?: string; 
  public get hmsEndpointServiceId() {
    return this.getStringAttribute('hms_endpoint_service_id');
  }
  public set hmsEndpointServiceId(value: string) {
    this._hmsEndpointServiceId = value;
  }
  public resetHmsEndpointServiceId() {
    this._hmsEndpointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmsEndpointServiceIdInput() {
    return this._hmsEndpointServiceId;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // meta_store_url - computed: false, optional: true, required: false
  private _metaStoreUrl?: string; 
  public get metaStoreUrl() {
    return this.getStringAttribute('meta_store_url');
  }
  public set metaStoreUrl(value: string) {
    this._metaStoreUrl = value;
  }
  public resetMetaStoreUrl() {
    this._metaStoreUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaStoreUrlInput() {
    return this._metaStoreUrl;
  }

  // tcc_connection - computed: false, optional: true, required: false
  private _tccConnection = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnectionOutputReference(this, "tcc_connection");
  public get tccConnection() {
    return this._tccConnection;
  }
  public putTccConnection(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveTccConnection) {
    this._tccConnection.internalValue = value;
  }
  public resetTccConnection() {
    this._tccConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tccConnectionInput() {
    return this._tccConnection.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocation {
  /**
  * Subnet IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_cidr_block DlcDatasourceHouseAttachment#subnet_cidr_block}
  */
  readonly subnetCidrBlock: string;
  /**
  * Subnet instance ID where the data connection is located, such as 'subnet-bthucmmy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#subnet_id DlcDatasourceHouseAttachment#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC IPv4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_cidr_block DlcDatasourceHouseAttachment#vpc_cidr_block}
  */
  readonly vpcCidrBlock: string;
  /**
  * VPC instance ID where the data connection is located, such as 'vpc-azd4dt1c'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#vpc_id DlcDatasourceHouseAttachment#vpc_id}
  */
  readonly vpcId: string;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_cidr_block: cdktf.stringToTerraform(struct!.subnetCidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_cidr_block: cdktf.stringToTerraform(struct!.vpcCidrBlock),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.vpcCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidrBlock = this._subnetCidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCidrBlock = this._vpcCidrBlock;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetCidrBlock = undefined;
      this._subnetId = undefined;
      this._vpcCidrBlock = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetCidrBlock = value.subnetCidrBlock;
      this._subnetId = value.subnetId;
      this._vpcCidrBlock = value.vpcCidrBlock;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_cidr_block - computed: false, optional: false, required: true
  private _subnetCidrBlock?: string; 
  public get subnetCidrBlock() {
    return this.getStringAttribute('subnet_cidr_block');
  }
  public set subnetCidrBlock(value: string) {
    this._subnetCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrBlockInput() {
    return this._subnetCidrBlock;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_cidr_block - computed: false, optional: false, required: true
  private _vpcCidrBlock?: string; 
  public get vpcCidrBlock() {
    return this.getStringAttribute('vpc_cidr_block');
  }
  public set vpcCidrBlock(value: string) {
    this._vpcCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrBlockInput() {
    return this._vpcCidrBlock;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSql {
  /**
  * Default database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#db_name DlcDatasourceHouseAttachment#db_name}
  */
  readonly dbName?: string;
  /**
  * Unique ID of the data source instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_id DlcDatasourceHouseAttachment#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Name of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#instance_name DlcDatasourceHouseAttachment#instance_name}
  */
  readonly instanceName?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#location DlcDatasourceHouseAttachment#location}
  */
  readonly location?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocation;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    location: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationToTerraform(struct!.location),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbName = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbName = value.dbName;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._location.internalValue = value.location;
    }
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DlcDatasourceHouseAttachmentDatasourceConnectionConfig {
  /**
  * click_house block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#click_house DlcDatasourceHouseAttachment#click_house}
  */
  readonly clickHouse?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouse;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#elasticsearch DlcDatasourceHouseAttachment#elasticsearch}
  */
  readonly elasticsearch?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearch;
  /**
  * hive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#hive DlcDatasourceHouseAttachment#hive}
  */
  readonly hive?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHive;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#kafka DlcDatasourceHouseAttachment#kafka}
  */
  readonly kafka?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafka;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#mysql DlcDatasourceHouseAttachment#mysql}
  */
  readonly mysql?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysql;
  /**
  * other_datasource_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#other_datasource_connection DlcDatasourceHouseAttachment#other_datasource_connection}
  */
  readonly otherDatasourceConnection?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnection;
  /**
  * postgre_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#postgre_sql DlcDatasourceHouseAttachment#postgre_sql}
  */
  readonly postgreSql?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSql;
  /**
  * sql_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#sql_server DlcDatasourceHouseAttachment#sql_server}
  */
  readonly sqlServer?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServer;
  /**
  * tc_house_d block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#tc_house_d DlcDatasourceHouseAttachment#tc_house_d}
  */
  readonly tcHouseD?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseD;
  /**
  * tcc_hive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#tcc_hive DlcDatasourceHouseAttachment#tcc_hive}
  */
  readonly tccHive?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHive;
  /**
  * tdsql_postgre_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#tdsql_postgre_sql DlcDatasourceHouseAttachment#tdsql_postgre_sql}
  */
  readonly tdsqlPostgreSql?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSql;
}

export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigToTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    click_house: dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseToTerraform(struct!.clickHouse),
    elasticsearch: dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchToTerraform(struct!.elasticsearch),
    hive: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveToTerraform(struct!.hive),
    kafka: dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaToTerraform(struct!.kafka),
    mysql: dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlToTerraform(struct!.mysql),
    other_datasource_connection: dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionToTerraform(struct!.otherDatasourceConnection),
    postgre_sql: dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlToTerraform(struct!.postgreSql),
    sql_server: dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerToTerraform(struct!.sqlServer),
    tc_house_d: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDToTerraform(struct!.tcHouseD),
    tcc_hive: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveToTerraform(struct!.tccHive),
    tdsql_postgre_sql: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlToTerraform(struct!.tdsqlPostgreSql),
  }
}


export function dlcDatasourceHouseAttachmentDatasourceConnectionConfigToHclTerraform(struct?: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOutputReference | DlcDatasourceHouseAttachmentDatasourceConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    click_house: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseToHclTerraform(struct!.clickHouse),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseList",
    },
    elasticsearch: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchToHclTerraform(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchList",
    },
    hive: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveToHclTerraform(struct!.hive),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveList",
    },
    kafka: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaList",
    },
    mysql: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlList",
    },
    other_datasource_connection: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionToHclTerraform(struct!.otherDatasourceConnection),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionList",
    },
    postgre_sql: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlToHclTerraform(struct!.postgreSql),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlList",
    },
    sql_server: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerToHclTerraform(struct!.sqlServer),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerList",
    },
    tc_house_d: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDToHclTerraform(struct!.tcHouseD),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDList",
    },
    tcc_hive: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveToHclTerraform(struct!.tccHive),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveList",
    },
    tdsql_postgre_sql: {
      value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlToHclTerraform(struct!.tdsqlPostgreSql),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDatasourceHouseAttachmentDatasourceConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDatasourceHouseAttachmentDatasourceConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickHouse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickHouse = this._clickHouse?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._hive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hive = this._hive?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._otherDatasourceConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDatasourceConnection = this._otherDatasourceConnection?.internalValue;
    }
    if (this._postgreSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgreSql = this._postgreSql?.internalValue;
    }
    if (this._sqlServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServer = this._sqlServer?.internalValue;
    }
    if (this._tcHouseD?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcHouseD = this._tcHouseD?.internalValue;
    }
    if (this._tccHive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tccHive = this._tccHive?.internalValue;
    }
    if (this._tdsqlPostgreSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdsqlPostgreSql = this._tdsqlPostgreSql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clickHouse.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._hive.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._otherDatasourceConnection.internalValue = undefined;
      this._postgreSql.internalValue = undefined;
      this._sqlServer.internalValue = undefined;
      this._tcHouseD.internalValue = undefined;
      this._tccHive.internalValue = undefined;
      this._tdsqlPostgreSql.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clickHouse.internalValue = value.clickHouse;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._hive.internalValue = value.hive;
      this._kafka.internalValue = value.kafka;
      this._mysql.internalValue = value.mysql;
      this._otherDatasourceConnection.internalValue = value.otherDatasourceConnection;
      this._postgreSql.internalValue = value.postgreSql;
      this._sqlServer.internalValue = value.sqlServer;
      this._tcHouseD.internalValue = value.tcHouseD;
      this._tccHive.internalValue = value.tccHive;
      this._tdsqlPostgreSql.internalValue = value.tdsqlPostgreSql;
    }
  }

  // click_house - computed: false, optional: true, required: false
  private _clickHouse = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouseOutputReference(this, "click_house");
  public get clickHouse() {
    return this._clickHouse;
  }
  public putClickHouse(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigClickHouse) {
    this._clickHouse.internalValue = value;
  }
  public resetClickHouse() {
    this._clickHouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickHouseInput() {
    return this._clickHouse.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // hive - computed: false, optional: true, required: false
  private _hive = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigHiveOutputReference(this, "hive");
  public get hive() {
    return this._hive;
  }
  public putHive(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigHive) {
    this._hive.internalValue = value;
  }
  public resetHive() {
    this._hive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveInput() {
    return this._hive.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // other_datasource_connection - computed: false, optional: true, required: false
  private _otherDatasourceConnection = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnectionOutputReference(this, "other_datasource_connection");
  public get otherDatasourceConnection() {
    return this._otherDatasourceConnection;
  }
  public putOtherDatasourceConnection(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigOtherDatasourceConnection) {
    this._otherDatasourceConnection.internalValue = value;
  }
  public resetOtherDatasourceConnection() {
    this._otherDatasourceConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDatasourceConnectionInput() {
    return this._otherDatasourceConnection.internalValue;
  }

  // postgre_sql - computed: false, optional: true, required: false
  private _postgreSql = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSqlOutputReference(this, "postgre_sql");
  public get postgreSql() {
    return this._postgreSql;
  }
  public putPostgreSql(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigPostgreSql) {
    this._postgreSql.internalValue = value;
  }
  public resetPostgreSql() {
    this._postgreSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgreSqlInput() {
    return this._postgreSql.internalValue;
  }

  // sql_server - computed: false, optional: true, required: false
  private _sqlServer = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServerOutputReference(this, "sql_server");
  public get sqlServer() {
    return this._sqlServer;
  }
  public putSqlServer(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigSqlServer) {
    this._sqlServer.internalValue = value;
  }
  public resetSqlServer() {
    this._sqlServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerInput() {
    return this._sqlServer.internalValue;
  }

  // tc_house_d - computed: false, optional: true, required: false
  private _tcHouseD = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseDOutputReference(this, "tc_house_d");
  public get tcHouseD() {
    return this._tcHouseD;
  }
  public putTcHouseD(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTcHouseD) {
    this._tcHouseD.internalValue = value;
  }
  public resetTcHouseD() {
    this._tcHouseD.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcHouseDInput() {
    return this._tcHouseD.internalValue;
  }

  // tcc_hive - computed: false, optional: true, required: false
  private _tccHive = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHiveOutputReference(this, "tcc_hive");
  public get tccHive() {
    return this._tccHive;
  }
  public putTccHive(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTccHive) {
    this._tccHive.internalValue = value;
  }
  public resetTccHive() {
    this._tccHive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tccHiveInput() {
    return this._tccHive.internalValue;
  }

  // tdsql_postgre_sql - computed: false, optional: true, required: false
  private _tdsqlPostgreSql = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSqlOutputReference(this, "tdsql_postgre_sql");
  public get tdsqlPostgreSql() {
    return this._tdsqlPostgreSql;
  }
  public putTdsqlPostgreSql(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfigTdsqlPostgreSql) {
    this._tdsqlPostgreSql.internalValue = value;
  }
  public resetTdsqlPostgreSql() {
    this._tdsqlPostgreSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdsqlPostgreSqlInput() {
    return this._tdsqlPostgreSql.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment tencentcloud_dlc_datasource_house_attachment}
*/
export class DlcDatasourceHouseAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_datasource_house_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcDatasourceHouseAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcDatasourceHouseAttachment to import
  * @param importFromId The id of the existing DlcDatasourceHouseAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcDatasourceHouseAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_datasource_house_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_datasource_house_attachment tencentcloud_dlc_datasource_house_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcDatasourceHouseAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DlcDatasourceHouseAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_datasource_house_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataEngineNames = config.dataEngineNames;
    this._datasourceConnectionName = config.datasourceConnectionName;
    this._datasourceConnectionType = config.datasourceConnectionType;
    this._id = config.id;
    this._networkConnectionDesc = config.networkConnectionDesc;
    this._networkConnectionType = config.networkConnectionType;
    this._datasourceConnectionConfig.internalValue = config.datasourceConnectionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine_names - computed: false, optional: false, required: true
  private _dataEngineNames?: string[]; 
  public get dataEngineNames() {
    return cdktf.Fn.tolist(this.getListAttribute('data_engine_names'));
  }
  public set dataEngineNames(value: string[]) {
    this._dataEngineNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineNamesInput() {
    return this._dataEngineNames;
  }

  // datasource_connection_name - computed: false, optional: false, required: true
  private _datasourceConnectionName?: string; 
  public get datasourceConnectionName() {
    return this.getStringAttribute('datasource_connection_name');
  }
  public set datasourceConnectionName(value: string) {
    this._datasourceConnectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceConnectionNameInput() {
    return this._datasourceConnectionName;
  }

  // datasource_connection_type - computed: false, optional: false, required: true
  private _datasourceConnectionType?: string; 
  public get datasourceConnectionType() {
    return this.getStringAttribute('datasource_connection_type');
  }
  public set datasourceConnectionType(value: string) {
    this._datasourceConnectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceConnectionTypeInput() {
    return this._datasourceConnectionType;
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

  // network_connection_desc - computed: false, optional: true, required: false
  private _networkConnectionDesc?: string; 
  public get networkConnectionDesc() {
    return this.getStringAttribute('network_connection_desc');
  }
  public set networkConnectionDesc(value: string) {
    this._networkConnectionDesc = value;
  }
  public resetNetworkConnectionDesc() {
    this._networkConnectionDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionDescInput() {
    return this._networkConnectionDesc;
  }

  // network_connection_type - computed: false, optional: false, required: true
  private _networkConnectionType?: number; 
  public get networkConnectionType() {
    return this.getNumberAttribute('network_connection_type');
  }
  public set networkConnectionType(value: number) {
    this._networkConnectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionTypeInput() {
    return this._networkConnectionType;
  }

  // datasource_connection_config - computed: false, optional: false, required: true
  private _datasourceConnectionConfig = new DlcDatasourceHouseAttachmentDatasourceConnectionConfigOutputReference(this, "datasource_connection_config");
  public get datasourceConnectionConfig() {
    return this._datasourceConnectionConfig;
  }
  public putDatasourceConnectionConfig(value: DlcDatasourceHouseAttachmentDatasourceConnectionConfig) {
    this._datasourceConnectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceConnectionConfigInput() {
    return this._datasourceConnectionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataEngineNames),
      datasource_connection_name: cdktf.stringToTerraform(this._datasourceConnectionName),
      datasource_connection_type: cdktf.stringToTerraform(this._datasourceConnectionType),
      id: cdktf.stringToTerraform(this._id),
      network_connection_desc: cdktf.stringToTerraform(this._networkConnectionDesc),
      network_connection_type: cdktf.numberToTerraform(this._networkConnectionType),
      datasource_connection_config: dlcDatasourceHouseAttachmentDatasourceConnectionConfigToTerraform(this._datasourceConnectionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataEngineNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      datasource_connection_name: {
        value: cdktf.stringToHclTerraform(this._datasourceConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasource_connection_type: {
        value: cdktf.stringToHclTerraform(this._datasourceConnectionType),
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
      network_connection_desc: {
        value: cdktf.stringToHclTerraform(this._networkConnectionDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_connection_type: {
        value: cdktf.numberToHclTerraform(this._networkConnectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      datasource_connection_config: {
        value: dlcDatasourceHouseAttachmentDatasourceConnectionConfigToHclTerraform(this._datasourceConnectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcDatasourceHouseAttachmentDatasourceConnectionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

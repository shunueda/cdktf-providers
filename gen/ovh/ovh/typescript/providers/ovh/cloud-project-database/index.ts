// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced configuration key / value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#advanced_configuration CloudProjectDatabase#advanced_configuration}
  */
  readonly advancedConfiguration?: { [key: string]: string };
  /**
  * List of region where backups are pushed. Not more than 1 regions for MongoDB. Not more than 2 regions for the other engines with one being the same as the nodes[].region field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#backup_regions CloudProjectDatabase#backup_regions}
  */
  readonly backupRegions?: string[];
  /**
  * Time on which backups start every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#backup_time CloudProjectDatabase#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Enable deletion protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#deletion_protection CloudProjectDatabase#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#description CloudProjectDatabase#description}
  */
  readonly description?: string;
  /**
  * Disk size attributes of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#disk_size CloudProjectDatabase#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Name of the engine of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#engine CloudProjectDatabase#engine}
  */
  readonly engine: string;
  /**
  * The node flavor used for this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#flavor CloudProjectDatabase#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#id CloudProjectDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines whether the REST API is enabled on a Kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#kafka_rest_api CloudProjectDatabase#kafka_rest_api}
  */
  readonly kafkaRestApi?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the schema registry is enabled on a Kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#kafka_schema_registry CloudProjectDatabase#kafka_schema_registry}
  */
  readonly kafkaSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Time on which maintenances can start every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#maintenance_time CloudProjectDatabase#maintenance_time}
  */
  readonly maintenanceTime?: string;
  /**
  * Defines whether the ACLs are enabled on an Opensearch cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#opensearch_acls_enabled CloudProjectDatabase#opensearch_acls_enabled}
  */
  readonly opensearchAclsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Plan of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#plan CloudProjectDatabase#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#service_name CloudProjectDatabase#service_name}
  */
  readonly serviceName: string;
  /**
  * Version of the engine deployed on the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#version CloudProjectDatabase#version}
  */
  readonly version: string;
  /**
  * ip_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#ip_restrictions CloudProjectDatabase#ip_restrictions}
  */
  readonly ipRestrictions?: CloudProjectDatabaseIpRestrictions[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#nodes CloudProjectDatabase#nodes}
  */
  readonly nodes: CloudProjectDatabaseNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#timeouts CloudProjectDatabase#timeouts}
  */
  readonly timeouts?: CloudProjectDatabaseTimeouts;
}
export interface CloudProjectDatabaseEndpoints {
}

export function cloudProjectDatabaseEndpointsToTerraform(struct?: CloudProjectDatabaseEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectDatabaseEndpointsToHclTerraform(struct?: CloudProjectDatabaseEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectDatabaseEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectDatabaseEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectDatabaseEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class CloudProjectDatabaseEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): CloudProjectDatabaseEndpointsOutputReference {
    return new CloudProjectDatabaseEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectDatabaseIpRestrictions {
  /**
  * Description of the IP restriction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#description CloudProjectDatabase#description}
  */
  readonly description?: string;
  /**
  * Authorized IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#ip CloudProjectDatabase#ip}
  */
  readonly ip?: string;
}

export function cloudProjectDatabaseIpRestrictionsToTerraform(struct?: CloudProjectDatabaseIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function cloudProjectDatabaseIpRestrictionsToHclTerraform(struct?: CloudProjectDatabaseIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectDatabaseIpRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectDatabaseIpRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectDatabaseIpRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ip = value.ip;
    }
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class CloudProjectDatabaseIpRestrictionsList extends cdktf.ComplexList {
  public internalValue? : CloudProjectDatabaseIpRestrictions[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectDatabaseIpRestrictionsOutputReference {
    return new CloudProjectDatabaseIpRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectDatabaseNodes {
  /**
  * Private network ID in which the node is. It's the regional openstackId of the private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#network_id CloudProjectDatabase#network_id}
  */
  readonly networkId?: string;
  /**
  * Region of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#region CloudProjectDatabase#region}
  */
  readonly region: string;
  /**
  * Private subnet ID in which the node is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#subnet_id CloudProjectDatabase#subnet_id}
  */
  readonly subnetId?: string;
}

export function cloudProjectDatabaseNodesToTerraform(struct?: CloudProjectDatabaseNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    region: cdktf.stringToTerraform(struct!.region),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function cloudProjectDatabaseNodesToHclTerraform(struct?: CloudProjectDatabaseNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectDatabaseNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectDatabaseNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectDatabaseNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._region = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._region = value.region;
      this._subnetId = value.subnetId;
    }
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
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
}

export class CloudProjectDatabaseNodesList extends cdktf.ComplexList {
  public internalValue? : CloudProjectDatabaseNodes[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectDatabaseNodesOutputReference {
    return new CloudProjectDatabaseNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#create CloudProjectDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#delete CloudProjectDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#update CloudProjectDatabase#update}
  */
  readonly update?: string;
}

export function cloudProjectDatabaseTimeoutsToTerraform(struct?: CloudProjectDatabaseTimeouts | cdktf.IResolvable): any {
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


export function cloudProjectDatabaseTimeoutsToHclTerraform(struct?: CloudProjectDatabaseTimeouts | cdktf.IResolvable): any {
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

export class CloudProjectDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudProjectDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database ovh_cloud_project_database}
*/
export class CloudProjectDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectDatabase to import
  * @param importFromId The id of the existing CloudProjectDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_database ovh_cloud_project_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_database',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedConfiguration = config.advancedConfiguration;
    this._backupRegions = config.backupRegions;
    this._backupTime = config.backupTime;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskSize = config.diskSize;
    this._engine = config.engine;
    this._flavor = config.flavor;
    this._id = config.id;
    this._kafkaRestApi = config.kafkaRestApi;
    this._kafkaSchemaRegistry = config.kafkaSchemaRegistry;
    this._maintenanceTime = config.maintenanceTime;
    this._opensearchAclsEnabled = config.opensearchAclsEnabled;
    this._plan = config.plan;
    this._serviceName = config.serviceName;
    this._version = config.version;
    this._ipRestrictions.internalValue = config.ipRestrictions;
    this._nodes.internalValue = config.nodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_configuration - computed: true, optional: true, required: false
  private _advancedConfiguration?: { [key: string]: string }; 
  public get advancedConfiguration() {
    return this.getStringMapAttribute('advanced_configuration');
  }
  public set advancedConfiguration(value: { [key: string]: string }) {
    this._advancedConfiguration = value;
  }
  public resetAdvancedConfiguration() {
    this._advancedConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigurationInput() {
    return this._advancedConfiguration;
  }

  // backup_regions - computed: true, optional: true, required: false
  private _backupRegions?: string[]; 
  public get backupRegions() {
    return this.getListAttribute('backup_regions');
  }
  public set backupRegions(value: string[]) {
    this._backupRegions = value;
  }
  public resetBackupRegions() {
    this._backupRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRegionsInput() {
    return this._backupRegions;
  }

  // backup_time - computed: true, optional: true, required: false
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  public resetBackupTime() {
    this._backupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new CloudProjectDatabaseEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // kafka_rest_api - computed: false, optional: true, required: false
  private _kafkaRestApi?: boolean | cdktf.IResolvable; 
  public get kafkaRestApi() {
    return this.getBooleanAttribute('kafka_rest_api');
  }
  public set kafkaRestApi(value: boolean | cdktf.IResolvable) {
    this._kafkaRestApi = value;
  }
  public resetKafkaRestApi() {
    this._kafkaRestApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestApiInput() {
    return this._kafkaRestApi;
  }

  // kafka_schema_registry - computed: false, optional: true, required: false
  private _kafkaSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get kafkaSchemaRegistry() {
    return this.getBooleanAttribute('kafka_schema_registry');
  }
  public set kafkaSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._kafkaSchemaRegistry = value;
  }
  public resetKafkaSchemaRegistry() {
    this._kafkaSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSchemaRegistryInput() {
    return this._kafkaSchemaRegistry;
  }

  // maintenance_time - computed: true, optional: true, required: false
  private _maintenanceTime?: string; 
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }
  public set maintenanceTime(value: string) {
    this._maintenanceTime = value;
  }
  public resetMaintenanceTime() {
    this._maintenanceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeInput() {
    return this._maintenanceTime;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // opensearch_acls_enabled - computed: false, optional: true, required: false
  private _opensearchAclsEnabled?: boolean | cdktf.IResolvable; 
  public get opensearchAclsEnabled() {
    return this.getBooleanAttribute('opensearch_acls_enabled');
  }
  public set opensearchAclsEnabled(value: boolean | cdktf.IResolvable) {
    this._opensearchAclsEnabled = value;
  }
  public resetOpensearchAclsEnabled() {
    this._opensearchAclsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchAclsEnabledInput() {
    return this._opensearchAclsEnabled;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // ip_restrictions - computed: false, optional: true, required: false
  private _ipRestrictions = new CloudProjectDatabaseIpRestrictionsList(this, "ip_restrictions", true);
  public get ipRestrictions() {
    return this._ipRestrictions;
  }
  public putIpRestrictions(value: CloudProjectDatabaseIpRestrictions[] | cdktf.IResolvable) {
    this._ipRestrictions.internalValue = value;
  }
  public resetIpRestrictions() {
    this._ipRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionsInput() {
    return this._ipRestrictions.internalValue;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new CloudProjectDatabaseNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: CloudProjectDatabaseNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudProjectDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudProjectDatabaseTimeouts) {
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
      advanced_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._advancedConfiguration),
      backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupRegions),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      engine: cdktf.stringToTerraform(this._engine),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      kafka_rest_api: cdktf.booleanToTerraform(this._kafkaRestApi),
      kafka_schema_registry: cdktf.booleanToTerraform(this._kafkaSchemaRegistry),
      maintenance_time: cdktf.stringToTerraform(this._maintenanceTime),
      opensearch_acls_enabled: cdktf.booleanToTerraform(this._opensearchAclsEnabled),
      plan: cdktf.stringToTerraform(this._plan),
      service_name: cdktf.stringToTerraform(this._serviceName),
      version: cdktf.stringToTerraform(this._version),
      ip_restrictions: cdktf.listMapper(cloudProjectDatabaseIpRestrictionsToTerraform, true)(this._ipRestrictions.internalValue),
      nodes: cdktf.listMapper(cloudProjectDatabaseNodesToTerraform, true)(this._nodes.internalValue),
      timeouts: cloudProjectDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._advancedConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      backup_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backup_time: {
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      kafka_rest_api: {
        value: cdktf.booleanToHclTerraform(this._kafkaRestApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_schema_registry: {
        value: cdktf.booleanToHclTerraform(this._kafkaSchemaRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opensearch_acls_enabled: {
        value: cdktf.booleanToHclTerraform(this._opensearchAclsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_restrictions: {
        value: cdktf.listMapperHcl(cloudProjectDatabaseIpRestrictionsToHclTerraform, true)(this._ipRestrictions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectDatabaseIpRestrictionsList",
      },
      nodes: {
        value: cdktf.listMapperHcl(cloudProjectDatabaseNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProjectDatabaseNodesList",
      },
      timeouts: {
        value: cloudProjectDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

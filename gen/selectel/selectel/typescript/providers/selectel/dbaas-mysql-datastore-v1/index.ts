// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasMysqlDatastoreV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Number of days to retain backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#backup_retention_days DbaasMysqlDatastoreV1#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#config DbaasMysqlDatastoreV1#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#flavor_id DbaasMysqlDatastoreV1#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#id DbaasMysqlDatastoreV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of Logs group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#logs DbaasMysqlDatastoreV1#logs}
  */
  readonly logs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#name DbaasMysqlDatastoreV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#node_count DbaasMysqlDatastoreV1#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#project_id DbaasMysqlDatastoreV1#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#region DbaasMysqlDatastoreV1#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#security_groups DbaasMysqlDatastoreV1#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#subnet_id DbaasMysqlDatastoreV1#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#type_id DbaasMysqlDatastoreV1#type_id}
  */
  readonly typeId: string;
  /**
  * firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#firewall DbaasMysqlDatastoreV1#firewall}
  */
  readonly firewall?: DbaasMysqlDatastoreV1Firewall[] | cdktf.IResolvable;
  /**
  * flavor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#flavor DbaasMysqlDatastoreV1#flavor}
  */
  readonly flavor?: DbaasMysqlDatastoreV1Flavor[] | cdktf.IResolvable;
  /**
  * floating_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#floating_ips DbaasMysqlDatastoreV1#floating_ips}
  */
  readonly floatingIps?: DbaasMysqlDatastoreV1FloatingIps[] | cdktf.IResolvable;
  /**
  * restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#restore DbaasMysqlDatastoreV1#restore}
  */
  readonly restore?: DbaasMysqlDatastoreV1Restore[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#timeouts DbaasMysqlDatastoreV1#timeouts}
  */
  readonly timeouts?: DbaasMysqlDatastoreV1Timeouts;
}
export interface DbaasMysqlDatastoreV1Instances {
}

export function dbaasMysqlDatastoreV1InstancesToTerraform(struct?: DbaasMysqlDatastoreV1Instances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dbaasMysqlDatastoreV1InstancesToHclTerraform(struct?: DbaasMysqlDatastoreV1Instances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DbaasMysqlDatastoreV1InstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbaasMysqlDatastoreV1Instances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasMysqlDatastoreV1Instances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // floating_ip - computed: true, optional: false, required: false
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DbaasMysqlDatastoreV1InstancesList extends cdktf.ComplexList {

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
  public get(index: number): DbaasMysqlDatastoreV1InstancesOutputReference {
    return new DbaasMysqlDatastoreV1InstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbaasMysqlDatastoreV1Firewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#ips DbaasMysqlDatastoreV1#ips}
  */
  readonly ips: string[];
}

export function dbaasMysqlDatastoreV1FirewallToTerraform(struct?: DbaasMysqlDatastoreV1Firewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
  }
}


export function dbaasMysqlDatastoreV1FirewallToHclTerraform(struct?: DbaasMysqlDatastoreV1Firewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasMysqlDatastoreV1FirewallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbaasMysqlDatastoreV1Firewall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasMysqlDatastoreV1Firewall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ips = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ips = value.ips;
    }
  }

  // ips - computed: false, optional: false, required: true
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }
}

export class DbaasMysqlDatastoreV1FirewallList extends cdktf.ComplexList {
  public internalValue? : DbaasMysqlDatastoreV1Firewall[] | cdktf.IResolvable

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
  public get(index: number): DbaasMysqlDatastoreV1FirewallOutputReference {
    return new DbaasMysqlDatastoreV1FirewallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbaasMysqlDatastoreV1Flavor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#disk DbaasMysqlDatastoreV1#disk}
  */
  readonly disk: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#disk_type DbaasMysqlDatastoreV1#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#ram DbaasMysqlDatastoreV1#ram}
  */
  readonly ram: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#vcpus DbaasMysqlDatastoreV1#vcpus}
  */
  readonly vcpus: number;
}

export function dbaasMysqlDatastoreV1FlavorToTerraform(struct?: DbaasMysqlDatastoreV1Flavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktf.numberToTerraform(struct!.disk),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    ram: cdktf.numberToTerraform(struct!.ram),
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function dbaasMysqlDatastoreV1FlavorToHclTerraform(struct?: DbaasMysqlDatastoreV1Flavor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktf.numberToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasMysqlDatastoreV1FlavorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbaasMysqlDatastoreV1Flavor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasMysqlDatastoreV1Flavor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk = undefined;
      this._diskType = undefined;
      this._ram = undefined;
      this._vcpus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk = value.disk;
      this._diskType = value.diskType;
      this._ram = value.ram;
      this._vcpus = value.vcpus;
    }
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // vcpus - computed: false, optional: false, required: true
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}

export class DbaasMysqlDatastoreV1FlavorList extends cdktf.ComplexList {
  public internalValue? : DbaasMysqlDatastoreV1Flavor[] | cdktf.IResolvable

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
  public get(index: number): DbaasMysqlDatastoreV1FlavorOutputReference {
    return new DbaasMysqlDatastoreV1FlavorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbaasMysqlDatastoreV1FloatingIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#master DbaasMysqlDatastoreV1#master}
  */
  readonly master: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#replica DbaasMysqlDatastoreV1#replica}
  */
  readonly replica: number;
}

export function dbaasMysqlDatastoreV1FloatingIpsToTerraform(struct?: DbaasMysqlDatastoreV1FloatingIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master: cdktf.numberToTerraform(struct!.master),
    replica: cdktf.numberToTerraform(struct!.replica),
  }
}


export function dbaasMysqlDatastoreV1FloatingIpsToHclTerraform(struct?: DbaasMysqlDatastoreV1FloatingIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master: {
      value: cdktf.numberToHclTerraform(struct!.master),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica: {
      value: cdktf.numberToHclTerraform(struct!.replica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasMysqlDatastoreV1FloatingIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbaasMysqlDatastoreV1FloatingIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._master !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master;
    }
    if (this._replica !== undefined) {
      hasAnyValues = true;
      internalValueResult.replica = this._replica;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasMysqlDatastoreV1FloatingIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._master = undefined;
      this._replica = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._master = value.master;
      this._replica = value.replica;
    }
  }

  // master - computed: false, optional: false, required: true
  private _master?: number; 
  public get master() {
    return this.getNumberAttribute('master');
  }
  public set master(value: number) {
    this._master = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // replica - computed: false, optional: false, required: true
  private _replica?: number; 
  public get replica() {
    return this.getNumberAttribute('replica');
  }
  public set replica(value: number) {
    this._replica = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica;
  }
}

export class DbaasMysqlDatastoreV1FloatingIpsList extends cdktf.ComplexList {
  public internalValue? : DbaasMysqlDatastoreV1FloatingIps[] | cdktf.IResolvable

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
  public get(index: number): DbaasMysqlDatastoreV1FloatingIpsOutputReference {
    return new DbaasMysqlDatastoreV1FloatingIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbaasMysqlDatastoreV1Restore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#datastore_id DbaasMysqlDatastoreV1#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#target_time DbaasMysqlDatastoreV1#target_time}
  */
  readonly targetTime?: string;
}

export function dbaasMysqlDatastoreV1RestoreToTerraform(struct?: DbaasMysqlDatastoreV1Restore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    target_time: cdktf.stringToTerraform(struct!.targetTime),
  }
}


export function dbaasMysqlDatastoreV1RestoreToHclTerraform(struct?: DbaasMysqlDatastoreV1Restore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_time: {
      value: cdktf.stringToHclTerraform(struct!.targetTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbaasMysqlDatastoreV1RestoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbaasMysqlDatastoreV1Restore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._targetTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTime = this._targetTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbaasMysqlDatastoreV1Restore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastoreId = undefined;
      this._targetTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastoreId = value.datastoreId;
      this._targetTime = value.targetTime;
    }
  }

  // datastore_id - computed: false, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // target_time - computed: false, optional: true, required: false
  private _targetTime?: string; 
  public get targetTime() {
    return this.getStringAttribute('target_time');
  }
  public set targetTime(value: string) {
    this._targetTime = value;
  }
  public resetTargetTime() {
    this._targetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimeInput() {
    return this._targetTime;
  }
}

export class DbaasMysqlDatastoreV1RestoreList extends cdktf.ComplexList {
  public internalValue? : DbaasMysqlDatastoreV1Restore[] | cdktf.IResolvable

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
  public get(index: number): DbaasMysqlDatastoreV1RestoreOutputReference {
    return new DbaasMysqlDatastoreV1RestoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbaasMysqlDatastoreV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#create DbaasMysqlDatastoreV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#delete DbaasMysqlDatastoreV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#update DbaasMysqlDatastoreV1#update}
  */
  readonly update?: string;
}

export function dbaasMysqlDatastoreV1TimeoutsToTerraform(struct?: DbaasMysqlDatastoreV1Timeouts | cdktf.IResolvable): any {
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


export function dbaasMysqlDatastoreV1TimeoutsToHclTerraform(struct?: DbaasMysqlDatastoreV1Timeouts | cdktf.IResolvable): any {
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

export class DbaasMysqlDatastoreV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbaasMysqlDatastoreV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbaasMysqlDatastoreV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1 selectel_dbaas_mysql_datastore_v1}
*/
export class DbaasMysqlDatastoreV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_dbaas_mysql_datastore_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasMysqlDatastoreV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasMysqlDatastoreV1 to import
  * @param importFromId The id of the existing DbaasMysqlDatastoreV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasMysqlDatastoreV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_dbaas_mysql_datastore_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/dbaas_mysql_datastore_v1 selectel_dbaas_mysql_datastore_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasMysqlDatastoreV1Config
  */
  public constructor(scope: Construct, id: string, config: DbaasMysqlDatastoreV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_dbaas_mysql_datastore_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupRetentionDays = config.backupRetentionDays;
    this._config = config.config;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._logs = config.logs;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._projectId = config.projectId;
    this._region = config.region;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._typeId = config.typeId;
    this._firewall.internalValue = config.firewall;
    this._flavor.internalValue = config.flavor;
    this._floatingIps.internalValue = config.floatingIps;
    this._restore.internalValue = config.restore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_retention_days - computed: false, optional: true, required: false
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new cdktf.StringMap(this, "connections");
  public get connections() {
    return this._connections;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // flavor_id - computed: true, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
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

  // instances - computed: true, optional: false, required: false
  private _instances = new DbaasMysqlDatastoreV1InstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: string; 
  public get logs() {
    return this.getStringAttribute('logs');
  }
  public set logs(value: string) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall = new DbaasMysqlDatastoreV1FirewallList(this, "firewall", true);
  public get firewall() {
    return this._firewall;
  }
  public putFirewall(value: DbaasMysqlDatastoreV1Firewall[] | cdktf.IResolvable) {
    this._firewall.internalValue = value;
  }
  public resetFirewall() {
    this._firewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall.internalValue;
  }

  // flavor - computed: false, optional: true, required: false
  private _flavor = new DbaasMysqlDatastoreV1FlavorList(this, "flavor", true);
  public get flavor() {
    return this._flavor;
  }
  public putFlavor(value: DbaasMysqlDatastoreV1Flavor[] | cdktf.IResolvable) {
    this._flavor.internalValue = value;
  }
  public resetFlavor() {
    this._flavor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor.internalValue;
  }

  // floating_ips - computed: false, optional: true, required: false
  private _floatingIps = new DbaasMysqlDatastoreV1FloatingIpsList(this, "floating_ips", true);
  public get floatingIps() {
    return this._floatingIps;
  }
  public putFloatingIps(value: DbaasMysqlDatastoreV1FloatingIps[] | cdktf.IResolvable) {
    this._floatingIps.internalValue = value;
  }
  public resetFloatingIps() {
    this._floatingIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpsInput() {
    return this._floatingIps.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new DbaasMysqlDatastoreV1RestoreList(this, "restore", true);
  public get restore() {
    return this._restore;
  }
  public putRestore(value: DbaasMysqlDatastoreV1Restore[] | cdktf.IResolvable) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbaasMysqlDatastoreV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbaasMysqlDatastoreV1Timeouts) {
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
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      logs: cdktf.stringToTerraform(this._logs),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      type_id: cdktf.stringToTerraform(this._typeId),
      firewall: cdktf.listMapper(dbaasMysqlDatastoreV1FirewallToTerraform, true)(this._firewall.internalValue),
      flavor: cdktf.listMapper(dbaasMysqlDatastoreV1FlavorToTerraform, true)(this._flavor.internalValue),
      floating_ips: cdktf.listMapper(dbaasMysqlDatastoreV1FloatingIpsToTerraform, true)(this._floatingIps.internalValue),
      restore: cdktf.listMapper(dbaasMysqlDatastoreV1RestoreToTerraform, true)(this._restore.internalValue),
      timeouts: dbaasMysqlDatastoreV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_retention_days: {
        value: cdktf.numberToHclTerraform(this._backupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      logs: {
        value: cdktf.stringToHclTerraform(this._logs),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_id: {
        value: cdktf.stringToHclTerraform(this._typeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall: {
        value: cdktf.listMapperHcl(dbaasMysqlDatastoreV1FirewallToHclTerraform, true)(this._firewall.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbaasMysqlDatastoreV1FirewallList",
      },
      flavor: {
        value: cdktf.listMapperHcl(dbaasMysqlDatastoreV1FlavorToHclTerraform, true)(this._flavor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbaasMysqlDatastoreV1FlavorList",
      },
      floating_ips: {
        value: cdktf.listMapperHcl(dbaasMysqlDatastoreV1FloatingIpsToHclTerraform, true)(this._floatingIps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbaasMysqlDatastoreV1FloatingIpsList",
      },
      restore: {
        value: cdktf.listMapperHcl(dbaasMysqlDatastoreV1RestoreToHclTerraform, true)(this._restore.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbaasMysqlDatastoreV1RestoreList",
      },
      timeouts: {
        value: dbaasMysqlDatastoreV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbaasMysqlDatastoreV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

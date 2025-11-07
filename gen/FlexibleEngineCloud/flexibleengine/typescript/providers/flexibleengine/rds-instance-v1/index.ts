// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#availabilityzone RdsInstanceV1#availabilityzone}
  */
  readonly availabilityzone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#created RdsInstanceV1#created}
  */
  readonly created?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#dbport RdsInstanceV1#dbport}
  */
  readonly dbport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#dbrtpd RdsInstanceV1#dbrtpd}
  */
  readonly dbrtpd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#flavorref RdsInstanceV1#flavorref}
  */
  readonly flavorref: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#hostname RdsInstanceV1#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#id RdsInstanceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#name RdsInstanceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#region RdsInstanceV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#status RdsInstanceV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#type RdsInstanceV1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#updated RdsInstanceV1#updated}
  */
  readonly updated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#vpc RdsInstanceV1#vpc}
  */
  readonly vpc: string;
  /**
  * backupstrategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#backupstrategy RdsInstanceV1#backupstrategy}
  */
  readonly backupstrategy?: RdsInstanceV1Backupstrategy;
  /**
  * datastore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#datastore RdsInstanceV1#datastore}
  */
  readonly datastore: RdsInstanceV1Datastore;
  /**
  * ha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#ha RdsInstanceV1#ha}
  */
  readonly ha?: RdsInstanceV1Ha;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#nics RdsInstanceV1#nics}
  */
  readonly nics: RdsInstanceV1Nics;
  /**
  * securitygroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#securitygroup RdsInstanceV1#securitygroup}
  */
  readonly securitygroup: RdsInstanceV1Securitygroup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#timeouts RdsInstanceV1#timeouts}
  */
  readonly timeouts?: RdsInstanceV1Timeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#volume RdsInstanceV1#volume}
  */
  readonly volume: RdsInstanceV1Volume;
}
export interface RdsInstanceV1Backupstrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#keepdays RdsInstanceV1#keepdays}
  */
  readonly keepdays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#starttime RdsInstanceV1#starttime}
  */
  readonly starttime?: string;
}

export function rdsInstanceV1BackupstrategyToTerraform(struct?: RdsInstanceV1BackupstrategyOutputReference | RdsInstanceV1Backupstrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keepdays: cdktf.numberToTerraform(struct!.keepdays),
    starttime: cdktf.stringToTerraform(struct!.starttime),
  }
}


export function rdsInstanceV1BackupstrategyToHclTerraform(struct?: RdsInstanceV1BackupstrategyOutputReference | RdsInstanceV1Backupstrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keepdays: {
      value: cdktf.numberToHclTerraform(struct!.keepdays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starttime: {
      value: cdktf.stringToHclTerraform(struct!.starttime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV1BackupstrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV1Backupstrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepdays = this._keepdays;
    }
    if (this._starttime !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttime = this._starttime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Backupstrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepdays = undefined;
      this._starttime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepdays = value.keepdays;
      this._starttime = value.starttime;
    }
  }

  // keepdays - computed: false, optional: true, required: false
  private _keepdays?: number; 
  public get keepdays() {
    return this.getNumberAttribute('keepdays');
  }
  public set keepdays(value: number) {
    this._keepdays = value;
  }
  public resetKeepdays() {
    this._keepdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepdaysInput() {
    return this._keepdays;
  }

  // starttime - computed: false, optional: true, required: false
  private _starttime?: string; 
  public get starttime() {
    return this.getStringAttribute('starttime');
  }
  public set starttime(value: string) {
    this._starttime = value;
  }
  public resetStarttime() {
    this._starttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttimeInput() {
    return this._starttime;
  }
}
export interface RdsInstanceV1Datastore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#type RdsInstanceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#version RdsInstanceV1#version}
  */
  readonly version: string;
}

export function rdsInstanceV1DatastoreToTerraform(struct?: RdsInstanceV1DatastoreOutputReference | RdsInstanceV1Datastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function rdsInstanceV1DatastoreToHclTerraform(struct?: RdsInstanceV1DatastoreOutputReference | RdsInstanceV1Datastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV1DatastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV1Datastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Datastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
    }
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
}
export interface RdsInstanceV1Ha {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#enable RdsInstanceV1#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#replicationmode RdsInstanceV1#replicationmode}
  */
  readonly replicationmode?: string;
}

export function rdsInstanceV1HaToTerraform(struct?: RdsInstanceV1HaOutputReference | RdsInstanceV1Ha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    replicationmode: cdktf.stringToTerraform(struct!.replicationmode),
  }
}


export function rdsInstanceV1HaToHclTerraform(struct?: RdsInstanceV1HaOutputReference | RdsInstanceV1Ha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicationmode: {
      value: cdktf.stringToHclTerraform(struct!.replicationmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV1HaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV1Ha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._replicationmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationmode = this._replicationmode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Ha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._replicationmode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._replicationmode = value.replicationmode;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // replicationmode - computed: false, optional: true, required: false
  private _replicationmode?: string; 
  public get replicationmode() {
    return this.getStringAttribute('replicationmode');
  }
  public set replicationmode(value: string) {
    this._replicationmode = value;
  }
  public resetReplicationmode() {
    this._replicationmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationmodeInput() {
    return this._replicationmode;
  }
}
export interface RdsInstanceV1Nics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#subnetid RdsInstanceV1#subnetid}
  */
  readonly subnetid: string;
}

export function rdsInstanceV1NicsToTerraform(struct?: RdsInstanceV1NicsOutputReference | RdsInstanceV1Nics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnetid: cdktf.stringToTerraform(struct!.subnetid),
  }
}


export function rdsInstanceV1NicsToHclTerraform(struct?: RdsInstanceV1NicsOutputReference | RdsInstanceV1Nics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnetid: {
      value: cdktf.stringToHclTerraform(struct!.subnetid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV1NicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV1Nics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetid !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetid = this._subnetid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Nics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetid = value.subnetid;
    }
  }

  // subnetid - computed: false, optional: false, required: true
  private _subnetid?: string; 
  public get subnetid() {
    return this.getStringAttribute('subnetid');
  }
  public set subnetid(value: string) {
    this._subnetid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetidInput() {
    return this._subnetid;
  }
}
export interface RdsInstanceV1Securitygroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#id RdsInstanceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function rdsInstanceV1SecuritygroupToTerraform(struct?: RdsInstanceV1SecuritygroupOutputReference | RdsInstanceV1Securitygroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function rdsInstanceV1SecuritygroupToHclTerraform(struct?: RdsInstanceV1SecuritygroupOutputReference | RdsInstanceV1Securitygroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV1SecuritygroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV1Securitygroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Securitygroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface RdsInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#create RdsInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#delete RdsInstanceV1#delete}
  */
  readonly delete?: string;
}

export function rdsInstanceV1TimeoutsToTerraform(struct?: RdsInstanceV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function rdsInstanceV1TimeoutsToHclTerraform(struct?: RdsInstanceV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsInstanceV1Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface RdsInstanceV1Volume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#size RdsInstanceV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#type RdsInstanceV1#type}
  */
  readonly type: string;
}

export function rdsInstanceV1VolumeToTerraform(struct?: RdsInstanceV1VolumeOutputReference | RdsInstanceV1Volume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function rdsInstanceV1VolumeToHclTerraform(struct?: RdsInstanceV1VolumeOutputReference | RdsInstanceV1Volume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceV1VolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceV1Volume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Volume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1 flexibleengine_rds_instance_v1}
*/
export class RdsInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_rds_instance_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsInstanceV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsInstanceV1 to import
  * @param importFromId The id of the existing RdsInstanceV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsInstanceV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_rds_instance_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/rds_instance_v1 flexibleengine_rds_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: RdsInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_rds_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityzone = config.availabilityzone;
    this._created = config.created;
    this._dbport = config.dbport;
    this._dbrtpd = config.dbrtpd;
    this._flavorref = config.flavorref;
    this._hostname = config.hostname;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._type = config.type;
    this._updated = config.updated;
    this._vpc = config.vpc;
    this._backupstrategy.internalValue = config.backupstrategy;
    this._datastore.internalValue = config.datastore;
    this._ha.internalValue = config.ha;
    this._nics.internalValue = config.nics;
    this._securitygroup.internalValue = config.securitygroup;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availabilityzone - computed: false, optional: false, required: true
  private _availabilityzone?: string; 
  public get availabilityzone() {
    return this.getStringAttribute('availabilityzone');
  }
  public set availabilityzone(value: string) {
    this._availabilityzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityzoneInput() {
    return this._availabilityzone;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // dbport - computed: false, optional: true, required: false
  private _dbport?: string; 
  public get dbport() {
    return this.getStringAttribute('dbport');
  }
  public set dbport(value: string) {
    this._dbport = value;
  }
  public resetDbport() {
    this._dbport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbportInput() {
    return this._dbport;
  }

  // dbrtpd - computed: false, optional: false, required: true
  private _dbrtpd?: string; 
  public get dbrtpd() {
    return this.getStringAttribute('dbrtpd');
  }
  public set dbrtpd(value: string) {
    this._dbrtpd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbrtpdInput() {
    return this._dbrtpd;
  }

  // flavorref - computed: false, optional: false, required: true
  private _flavorref?: string; 
  public get flavorref() {
    return this.getStringAttribute('flavorref');
  }
  public set flavorref(value: string) {
    this._flavorref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorrefInput() {
    return this._flavorref;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated - computed: true, optional: true, required: false
  private _updated?: string; 
  public get updated() {
    return this.getStringAttribute('updated');
  }
  public set updated(value: string) {
    this._updated = value;
  }
  public resetUpdated() {
    this._updated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // backupstrategy - computed: false, optional: true, required: false
  private _backupstrategy = new RdsInstanceV1BackupstrategyOutputReference(this, "backupstrategy");
  public get backupstrategy() {
    return this._backupstrategy;
  }
  public putBackupstrategy(value: RdsInstanceV1Backupstrategy) {
    this._backupstrategy.internalValue = value;
  }
  public resetBackupstrategy() {
    this._backupstrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstrategyInput() {
    return this._backupstrategy.internalValue;
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore = new RdsInstanceV1DatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: RdsInstanceV1Datastore) {
    this._datastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // ha - computed: false, optional: true, required: false
  private _ha = new RdsInstanceV1HaOutputReference(this, "ha");
  public get ha() {
    return this._ha;
  }
  public putHa(value: RdsInstanceV1Ha) {
    this._ha.internalValue = value;
  }
  public resetHa() {
    this._ha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha.internalValue;
  }

  // nics - computed: false, optional: false, required: true
  private _nics = new RdsInstanceV1NicsOutputReference(this, "nics");
  public get nics() {
    return this._nics;
  }
  public putNics(value: RdsInstanceV1Nics) {
    this._nics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // securitygroup - computed: false, optional: false, required: true
  private _securitygroup = new RdsInstanceV1SecuritygroupOutputReference(this, "securitygroup");
  public get securitygroup() {
    return this._securitygroup;
  }
  public putSecuritygroup(value: RdsInstanceV1Securitygroup) {
    this._securitygroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitygroupInput() {
    return this._securitygroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsInstanceV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsInstanceV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new RdsInstanceV1VolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: RdsInstanceV1Volume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availabilityzone: cdktf.stringToTerraform(this._availabilityzone),
      created: cdktf.stringToTerraform(this._created),
      dbport: cdktf.stringToTerraform(this._dbport),
      dbrtpd: cdktf.stringToTerraform(this._dbrtpd),
      flavorref: cdktf.stringToTerraform(this._flavorref),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      updated: cdktf.stringToTerraform(this._updated),
      vpc: cdktf.stringToTerraform(this._vpc),
      backupstrategy: rdsInstanceV1BackupstrategyToTerraform(this._backupstrategy.internalValue),
      datastore: rdsInstanceV1DatastoreToTerraform(this._datastore.internalValue),
      ha: rdsInstanceV1HaToTerraform(this._ha.internalValue),
      nics: rdsInstanceV1NicsToTerraform(this._nics.internalValue),
      securitygroup: rdsInstanceV1SecuritygroupToTerraform(this._securitygroup.internalValue),
      timeouts: rdsInstanceV1TimeoutsToTerraform(this._timeouts.internalValue),
      volume: rdsInstanceV1VolumeToTerraform(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availabilityzone: {
        value: cdktf.stringToHclTerraform(this._availabilityzone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created: {
        value: cdktf.stringToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbport: {
        value: cdktf.stringToHclTerraform(this._dbport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbrtpd: {
        value: cdktf.stringToHclTerraform(this._dbrtpd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavorref: {
        value: cdktf.stringToHclTerraform(this._flavorref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated: {
        value: cdktf.stringToHclTerraform(this._updated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc: {
        value: cdktf.stringToHclTerraform(this._vpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backupstrategy: {
        value: rdsInstanceV1BackupstrategyToHclTerraform(this._backupstrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceV1BackupstrategyList",
      },
      datastore: {
        value: rdsInstanceV1DatastoreToHclTerraform(this._datastore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceV1DatastoreList",
      },
      ha: {
        value: rdsInstanceV1HaToHclTerraform(this._ha.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceV1HaList",
      },
      nics: {
        value: rdsInstanceV1NicsToHclTerraform(this._nics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceV1NicsList",
      },
      securitygroup: {
        value: rdsInstanceV1SecuritygroupToHclTerraform(this._securitygroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceV1SecuritygroupList",
      },
      timeouts: {
        value: rdsInstanceV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsInstanceV1Timeouts",
      },
      volume: {
        value: rdsInstanceV1VolumeToHclTerraform(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceV1VolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogEtlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#access_key_id LogEtl#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#access_key_secret LogEtl#access_key_secret}
  */
  readonly accessKeySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#create_time LogEtl#create_time}
  */
  readonly createTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#description LogEtl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#display_name LogEtl#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#etl_name LogEtl#etl_name}
  */
  readonly etlName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#etl_type LogEtl#etl_type}
  */
  readonly etlType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#from_time LogEtl#from_time}
  */
  readonly fromTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#id LogEtl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#kms_encrypted_access_key_id LogEtl#kms_encrypted_access_key_id}
  */
  readonly kmsEncryptedAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#kms_encrypted_access_key_secret LogEtl#kms_encrypted_access_key_secret}
  */
  readonly kmsEncryptedAccessKeySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#kms_encryption_access_key_id_context LogEtl#kms_encryption_access_key_id_context}
  */
  readonly kmsEncryptionAccessKeyIdContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#kms_encryption_access_key_secret_context LogEtl#kms_encryption_access_key_secret_context}
  */
  readonly kmsEncryptionAccessKeySecretContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#lang LogEtl#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#last_modified_time LogEtl#last_modified_time}
  */
  readonly lastModifiedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#logstore LogEtl#logstore}
  */
  readonly logstore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#parameters LogEtl#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#project LogEtl#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#role_arn LogEtl#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#schedule LogEtl#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#script LogEtl#script}
  */
  readonly script: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#status LogEtl#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#to_time LogEtl#to_time}
  */
  readonly toTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#version LogEtl#version}
  */
  readonly version?: number;
  /**
  * etl_sinks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#etl_sinks LogEtl#etl_sinks}
  */
  readonly etlSinks: LogEtlEtlSinks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#timeouts LogEtl#timeouts}
  */
  readonly timeouts?: LogEtlTimeouts;
}
export interface LogEtlEtlSinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#access_key_id LogEtl#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#access_key_secret LogEtl#access_key_secret}
  */
  readonly accessKeySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#datasets LogEtl#datasets}
  */
  readonly datasets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#endpoint LogEtl#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#kms_encrypted_access_key_id LogEtl#kms_encrypted_access_key_id}
  */
  readonly kmsEncryptedAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#kms_encrypted_access_key_secret LogEtl#kms_encrypted_access_key_secret}
  */
  readonly kmsEncryptedAccessKeySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#logstore LogEtl#logstore}
  */
  readonly logstore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#name LogEtl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#project LogEtl#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#role_arn LogEtl#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#type LogEtl#type}
  */
  readonly type?: string;
}

export function logEtlEtlSinksToTerraform(struct?: LogEtlEtlSinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    access_key_secret: cdktf.stringToTerraform(struct!.accessKeySecret),
    datasets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datasets),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kms_encrypted_access_key_id: cdktf.stringToTerraform(struct!.kmsEncryptedAccessKeyId),
    kms_encrypted_access_key_secret: cdktf.stringToTerraform(struct!.kmsEncryptedAccessKeySecret),
    logstore: cdktf.stringToTerraform(struct!.logstore),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logEtlEtlSinksToHclTerraform(struct?: LogEtlEtlSinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datasets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_encrypted_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsEncryptedAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_encrypted_access_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.kmsEncryptedAccessKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logstore: {
      value: cdktf.stringToHclTerraform(struct!.logstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogEtlEtlSinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogEtlEtlSinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._accessKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeySecret = this._accessKeySecret;
    }
    if (this._datasets !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasets = this._datasets;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsEncryptedAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsEncryptedAccessKeyId = this._kmsEncryptedAccessKeyId;
    }
    if (this._kmsEncryptedAccessKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsEncryptedAccessKeySecret = this._kmsEncryptedAccessKeySecret;
    }
    if (this._logstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstore = this._logstore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogEtlEtlSinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._accessKeySecret = undefined;
      this._datasets = undefined;
      this._endpoint = undefined;
      this._kmsEncryptedAccessKeyId = undefined;
      this._kmsEncryptedAccessKeySecret = undefined;
      this._logstore = undefined;
      this._name = undefined;
      this._project = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._accessKeySecret = value.accessKeySecret;
      this._datasets = value.datasets;
      this._endpoint = value.endpoint;
      this._kmsEncryptedAccessKeyId = value.kmsEncryptedAccessKeyId;
      this._kmsEncryptedAccessKeySecret = value.kmsEncryptedAccessKeySecret;
      this._logstore = value.logstore;
      this._name = value.name;
      this._project = value.project;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_secret - computed: false, optional: true, required: false
  private _accessKeySecret?: string; 
  public get accessKeySecret() {
    return this.getStringAttribute('access_key_secret');
  }
  public set accessKeySecret(value: string) {
    this._accessKeySecret = value;
  }
  public resetAccessKeySecret() {
    this._accessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretInput() {
    return this._accessKeySecret;
  }

  // datasets - computed: false, optional: true, required: false
  private _datasets?: string[]; 
  public get datasets() {
    return this.getListAttribute('datasets');
  }
  public set datasets(value: string[]) {
    this._datasets = value;
  }
  public resetDatasets() {
    this._datasets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetsInput() {
    return this._datasets;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_encrypted_access_key_id - computed: false, optional: true, required: false
  private _kmsEncryptedAccessKeyId?: string; 
  public get kmsEncryptedAccessKeyId() {
    return this.getStringAttribute('kms_encrypted_access_key_id');
  }
  public set kmsEncryptedAccessKeyId(value: string) {
    this._kmsEncryptedAccessKeyId = value;
  }
  public resetKmsEncryptedAccessKeyId() {
    this._kmsEncryptedAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedAccessKeyIdInput() {
    return this._kmsEncryptedAccessKeyId;
  }

  // kms_encrypted_access_key_secret - computed: false, optional: true, required: false
  private _kmsEncryptedAccessKeySecret?: string; 
  public get kmsEncryptedAccessKeySecret() {
    return this.getStringAttribute('kms_encrypted_access_key_secret');
  }
  public set kmsEncryptedAccessKeySecret(value: string) {
    this._kmsEncryptedAccessKeySecret = value;
  }
  public resetKmsEncryptedAccessKeySecret() {
    this._kmsEncryptedAccessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedAccessKeySecretInput() {
    return this._kmsEncryptedAccessKeySecret;
  }

  // logstore - computed: false, optional: false, required: true
  private _logstore?: string; 
  public get logstore() {
    return this.getStringAttribute('logstore');
  }
  public set logstore(value: string) {
    this._logstore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreInput() {
    return this._logstore;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // type - computed: false, optional: true, required: false
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
}

export class LogEtlEtlSinksList extends cdktf.ComplexList {
  public internalValue? : LogEtlEtlSinks[] | cdktf.IResolvable

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
  public get(index: number): LogEtlEtlSinksOutputReference {
    return new LogEtlEtlSinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogEtlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#create LogEtl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#delete LogEtl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#update LogEtl#update}
  */
  readonly update?: string;
}

export function logEtlTimeoutsToTerraform(struct?: LogEtlTimeouts | cdktf.IResolvable): any {
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


export function logEtlTimeoutsToHclTerraform(struct?: LogEtlTimeouts | cdktf.IResolvable): any {
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

export class LogEtlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogEtlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogEtlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl alicloud_log_etl}
*/
export class LogEtl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_log_etl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogEtl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogEtl to import
  * @param importFromId The id of the existing LogEtl that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogEtl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_log_etl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/log_etl alicloud_log_etl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogEtlConfig
  */
  public constructor(scope: Construct, id: string, config: LogEtlConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_log_etl',
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
    this._accessKeyId = config.accessKeyId;
    this._accessKeySecret = config.accessKeySecret;
    this._createTime = config.createTime;
    this._description = config.description;
    this._displayName = config.displayName;
    this._etlName = config.etlName;
    this._etlType = config.etlType;
    this._fromTime = config.fromTime;
    this._id = config.id;
    this._kmsEncryptedAccessKeyId = config.kmsEncryptedAccessKeyId;
    this._kmsEncryptedAccessKeySecret = config.kmsEncryptedAccessKeySecret;
    this._kmsEncryptionAccessKeyIdContext = config.kmsEncryptionAccessKeyIdContext;
    this._kmsEncryptionAccessKeySecretContext = config.kmsEncryptionAccessKeySecretContext;
    this._lang = config.lang;
    this._lastModifiedTime = config.lastModifiedTime;
    this._logstore = config.logstore;
    this._parameters = config.parameters;
    this._project = config.project;
    this._roleArn = config.roleArn;
    this._schedule = config.schedule;
    this._script = config.script;
    this._status = config.status;
    this._toTime = config.toTime;
    this._version = config.version;
    this._etlSinks.internalValue = config.etlSinks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_secret - computed: false, optional: true, required: false
  private _accessKeySecret?: string; 
  public get accessKeySecret() {
    return this.getStringAttribute('access_key_secret');
  }
  public set accessKeySecret(value: string) {
    this._accessKeySecret = value;
  }
  public resetAccessKeySecret() {
    this._accessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretInput() {
    return this._accessKeySecret;
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: number; 
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }
  public set createTime(value: number) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // etl_name - computed: false, optional: false, required: true
  private _etlName?: string; 
  public get etlName() {
    return this.getStringAttribute('etl_name');
  }
  public set etlName(value: string) {
    this._etlName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etlNameInput() {
    return this._etlName;
  }

  // etl_type - computed: false, optional: true, required: false
  private _etlType?: string; 
  public get etlType() {
    return this.getStringAttribute('etl_type');
  }
  public set etlType(value: string) {
    this._etlType = value;
  }
  public resetEtlType() {
    this._etlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etlTypeInput() {
    return this._etlType;
  }

  // from_time - computed: false, optional: true, required: false
  private _fromTime?: number; 
  public get fromTime() {
    return this.getNumberAttribute('from_time');
  }
  public set fromTime(value: number) {
    this._fromTime = value;
  }
  public resetFromTime() {
    this._fromTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeInput() {
    return this._fromTime;
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

  // kms_encrypted_access_key_id - computed: false, optional: true, required: false
  private _kmsEncryptedAccessKeyId?: string; 
  public get kmsEncryptedAccessKeyId() {
    return this.getStringAttribute('kms_encrypted_access_key_id');
  }
  public set kmsEncryptedAccessKeyId(value: string) {
    this._kmsEncryptedAccessKeyId = value;
  }
  public resetKmsEncryptedAccessKeyId() {
    this._kmsEncryptedAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedAccessKeyIdInput() {
    return this._kmsEncryptedAccessKeyId;
  }

  // kms_encrypted_access_key_secret - computed: false, optional: true, required: false
  private _kmsEncryptedAccessKeySecret?: string; 
  public get kmsEncryptedAccessKeySecret() {
    return this.getStringAttribute('kms_encrypted_access_key_secret');
  }
  public set kmsEncryptedAccessKeySecret(value: string) {
    this._kmsEncryptedAccessKeySecret = value;
  }
  public resetKmsEncryptedAccessKeySecret() {
    this._kmsEncryptedAccessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedAccessKeySecretInput() {
    return this._kmsEncryptedAccessKeySecret;
  }

  // kms_encryption_access_key_id_context - computed: false, optional: true, required: false
  private _kmsEncryptionAccessKeyIdContext?: { [key: string]: string }; 
  public get kmsEncryptionAccessKeyIdContext() {
    return this.getStringMapAttribute('kms_encryption_access_key_id_context');
  }
  public set kmsEncryptionAccessKeyIdContext(value: { [key: string]: string }) {
    this._kmsEncryptionAccessKeyIdContext = value;
  }
  public resetKmsEncryptionAccessKeyIdContext() {
    this._kmsEncryptionAccessKeyIdContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionAccessKeyIdContextInput() {
    return this._kmsEncryptionAccessKeyIdContext;
  }

  // kms_encryption_access_key_secret_context - computed: false, optional: true, required: false
  private _kmsEncryptionAccessKeySecretContext?: { [key: string]: string }; 
  public get kmsEncryptionAccessKeySecretContext() {
    return this.getStringMapAttribute('kms_encryption_access_key_secret_context');
  }
  public set kmsEncryptionAccessKeySecretContext(value: { [key: string]: string }) {
    this._kmsEncryptionAccessKeySecretContext = value;
  }
  public resetKmsEncryptionAccessKeySecretContext() {
    this._kmsEncryptionAccessKeySecretContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionAccessKeySecretContextInput() {
    return this._kmsEncryptionAccessKeySecretContext;
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

  // last_modified_time - computed: true, optional: true, required: false
  private _lastModifiedTime?: number; 
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }
  public set lastModifiedTime(value: number) {
    this._lastModifiedTime = value;
  }
  public resetLastModifiedTime() {
    this._lastModifiedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedTimeInput() {
    return this._lastModifiedTime;
  }

  // logstore - computed: false, optional: false, required: true
  private _logstore?: string; 
  public get logstore() {
    return this.getStringAttribute('logstore');
  }
  public set logstore(value: string) {
    this._logstore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreInput() {
    return this._logstore;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
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

  // to_time - computed: false, optional: true, required: false
  private _toTime?: number; 
  public get toTime() {
    return this.getNumberAttribute('to_time');
  }
  public set toTime(value: number) {
    this._toTime = value;
  }
  public resetToTime() {
    this._toTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toTimeInput() {
    return this._toTime;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // etl_sinks - computed: false, optional: false, required: true
  private _etlSinks = new LogEtlEtlSinksList(this, "etl_sinks", true);
  public get etlSinks() {
    return this._etlSinks;
  }
  public putEtlSinks(value: LogEtlEtlSinks[] | cdktf.IResolvable) {
    this._etlSinks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etlSinksInput() {
    return this._etlSinks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogEtlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogEtlTimeouts) {
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
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      access_key_secret: cdktf.stringToTerraform(this._accessKeySecret),
      create_time: cdktf.numberToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      etl_name: cdktf.stringToTerraform(this._etlName),
      etl_type: cdktf.stringToTerraform(this._etlType),
      from_time: cdktf.numberToTerraform(this._fromTime),
      id: cdktf.stringToTerraform(this._id),
      kms_encrypted_access_key_id: cdktf.stringToTerraform(this._kmsEncryptedAccessKeyId),
      kms_encrypted_access_key_secret: cdktf.stringToTerraform(this._kmsEncryptedAccessKeySecret),
      kms_encryption_access_key_id_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionAccessKeyIdContext),
      kms_encryption_access_key_secret_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionAccessKeySecretContext),
      lang: cdktf.stringToTerraform(this._lang),
      last_modified_time: cdktf.numberToTerraform(this._lastModifiedTime),
      logstore: cdktf.stringToTerraform(this._logstore),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      project: cdktf.stringToTerraform(this._project),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      schedule: cdktf.stringToTerraform(this._schedule),
      script: cdktf.stringToTerraform(this._script),
      status: cdktf.stringToTerraform(this._status),
      to_time: cdktf.numberToTerraform(this._toTime),
      version: cdktf.numberToTerraform(this._version),
      etl_sinks: cdktf.listMapper(logEtlEtlSinksToTerraform, true)(this._etlSinks.internalValue),
      timeouts: logEtlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key_secret: {
        value: cdktf.stringToHclTerraform(this._accessKeySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.numberToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etl_name: {
        value: cdktf.stringToHclTerraform(this._etlName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etl_type: {
        value: cdktf.stringToHclTerraform(this._etlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_time: {
        value: cdktf.numberToHclTerraform(this._fromTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_access_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_access_key_secret: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedAccessKeySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_access_key_id_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionAccessKeyIdContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kms_encryption_access_key_secret_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionAccessKeySecretContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_modified_time: {
        value: cdktf.numberToHclTerraform(this._lastModifiedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logstore: {
        value: cdktf.stringToHclTerraform(this._logstore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
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
      to_time: {
        value: cdktf.numberToHclTerraform(this._toTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      etl_sinks: {
        value: cdktf.listMapperHcl(logEtlEtlSinksToHclTerraform, true)(this._etlSinks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogEtlEtlSinksList",
      },
      timeouts: {
        value: logEtlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogEtlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

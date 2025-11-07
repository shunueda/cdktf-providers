// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSftpgoActionsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSftpgoActionsActionsOptionsCmdConfigEnvVars {
}

export function dataSftpgoActionsActionsOptionsCmdConfigEnvVarsToTerraform(struct?: DataSftpgoActionsActionsOptionsCmdConfigEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsCmdConfigEnvVarsToHclTerraform(struct?: DataSftpgoActionsActionsOptionsCmdConfigEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsCmdConfigEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsCmdConfigEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsCmdConfigEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSftpgoActionsActionsOptionsCmdConfigEnvVarsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsCmdConfigEnvVarsOutputReference {
    return new DataSftpgoActionsActionsOptionsCmdConfigEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsCmdConfig {
}

export function dataSftpgoActionsActionsOptionsCmdConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsCmdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsCmdConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsCmdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsCmdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsCmdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsCmdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // cmd - computed: true, optional: false, required: false
  public get cmd() {
    return this.getStringAttribute('cmd');
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataSftpgoActionsActionsOptionsCmdConfigEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}
export interface DataSftpgoActionsActionsOptionsEmailConfig {
}

export function dataSftpgoActionsActionsOptionsEmailConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsEmailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsEmailConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsEmailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsEmailConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsEmailConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsEmailConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachments - computed: true, optional: false, required: false
  public get attachments() {
    return this.getListAttribute('attachments');
  }

  // bcc - computed: true, optional: false, required: false
  public get bcc() {
    return this.getListAttribute('bcc');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getNumberAttribute('content_type');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getListAttribute('recipients');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfigCompress {
}

export function dataSftpgoActionsActionsOptionsFsConfigCompressToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigCompress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigCompressToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigCompress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsFsConfigCompressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfigCompress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfigCompress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfigCopy {
}

export function dataSftpgoActionsActionsOptionsFsConfigCopyToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigCopyToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsFsConfigCopyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfigCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfigCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSftpgoActionsActionsOptionsFsConfigCopyList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsFsConfigCopyOutputReference {
    return new DataSftpgoActionsActionsOptionsFsConfigCopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadata {
}

export function dataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadataToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadataToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfigMetadataCheck {
}

export function dataSftpgoActionsActionsOptionsFsConfigMetadataCheckToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigMetadataCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigMetadataCheckToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigMetadataCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsFsConfigMetadataCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfigMetadataCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfigMetadataCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataSftpgoActionsActionsOptionsFsConfigMetadataCheckMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfigPgpPaths {
}

export function dataSftpgoActionsActionsOptionsFsConfigPgpPathsToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigPgpPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigPgpPathsToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigPgpPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsFsConfigPgpPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfigPgpPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfigPgpPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSftpgoActionsActionsOptionsFsConfigPgpPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsFsConfigPgpPathsOutputReference {
    return new DataSftpgoActionsActionsOptionsFsConfigPgpPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfigPgp {
}

export function dataSftpgoActionsActionsOptionsFsConfigPgpToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigPgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigPgpToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigPgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsFsConfigPgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfigPgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfigPgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getNumberAttribute('mode');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // paths - computed: true, optional: false, required: false
  private _paths = new DataSftpgoActionsActionsOptionsFsConfigPgpPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getNumberAttribute('profile');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfigRenames {
  /**
  * Update modification time. This setting is not recursive and only applies to storage providers that support changing modification times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/actions#update_modtime DataSftpgoActions#update_modtime}
  */
  readonly updateModtime?: boolean | cdktf.IResolvable;
}

export function dataSftpgoActionsActionsOptionsFsConfigRenamesToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigRenames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update_modtime: cdktf.booleanToTerraform(struct!.updateModtime),
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigRenamesToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfigRenames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    update_modtime: {
      value: cdktf.booleanToHclTerraform(struct!.updateModtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSftpgoActionsActionsOptionsFsConfigRenamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfigRenames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._updateModtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateModtime = this._updateModtime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfigRenames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._updateModtime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._updateModtime = value.updateModtime;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // update_modtime - computed: true, optional: true, required: false
  private _updateModtime?: boolean | cdktf.IResolvable; 
  public get updateModtime() {
    return this.getBooleanAttribute('update_modtime');
  }
  public set updateModtime(value: boolean | cdktf.IResolvable) {
    this._updateModtime = value;
  }
  public resetUpdateModtime() {
    this._updateModtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateModtimeInput() {
    return this._updateModtime;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSftpgoActionsActionsOptionsFsConfigRenamesList extends cdktf.ComplexList {
  public internalValue? : DataSftpgoActionsActionsOptionsFsConfigRenames[] | cdktf.IResolvable

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
  public get(index: number): DataSftpgoActionsActionsOptionsFsConfigRenamesOutputReference {
    return new DataSftpgoActionsActionsOptionsFsConfigRenamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsFsConfig {
}

export function dataSftpgoActionsActionsOptionsFsConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsFsConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsFsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsFsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsFsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsFsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compress - computed: true, optional: false, required: false
  private _compress = new DataSftpgoActionsActionsOptionsFsConfigCompressOutputReference(this, "compress");
  public get compress() {
    return this._compress;
  }

  // copy - computed: true, optional: false, required: false
  private _copy = new DataSftpgoActionsActionsOptionsFsConfigCopyList(this, "copy", false);
  public get copy() {
    return this._copy;
  }

  // deletes - computed: true, optional: false, required: false
  public get deletes() {
    return this.getListAttribute('deletes');
  }

  // exist - computed: true, optional: false, required: false
  public get exist() {
    return this.getListAttribute('exist');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // metadata_check - computed: true, optional: false, required: false
  private _metadataCheck = new DataSftpgoActionsActionsOptionsFsConfigMetadataCheckOutputReference(this, "metadata_check");
  public get metadataCheck() {
    return this._metadataCheck;
  }

  // mkdirs - computed: true, optional: false, required: false
  public get mkdirs() {
    return this.getListAttribute('mkdirs');
  }

  // pgp - computed: true, optional: false, required: false
  private _pgp = new DataSftpgoActionsActionsOptionsFsConfigPgpOutputReference(this, "pgp");
  public get pgp() {
    return this._pgp;
  }

  // renames - computed: true, optional: false, required: false
  private _renames = new DataSftpgoActionsActionsOptionsFsConfigRenamesList(this, "renames", false);
  public get renames() {
    return this._renames;
  }

  // target_folder - computed: true, optional: false, required: false
  public get targetFolder() {
    return this.getStringAttribute('target_folder');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}
export interface DataSftpgoActionsActionsOptionsHttpConfigHeaders {
}

export function dataSftpgoActionsActionsOptionsHttpConfigHeadersToTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsHttpConfigHeadersToHclTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsHttpConfigHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsHttpConfigHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsHttpConfigHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSftpgoActionsActionsOptionsHttpConfigHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsHttpConfigHeadersOutputReference {
    return new DataSftpgoActionsActionsOptionsHttpConfigHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsHttpConfigPartsHeaders {
}

export function dataSftpgoActionsActionsOptionsHttpConfigPartsHeadersToTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigPartsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsHttpConfigPartsHeadersToHclTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigPartsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsHttpConfigPartsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsHttpConfigPartsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsHttpConfigPartsHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSftpgoActionsActionsOptionsHttpConfigPartsHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsHttpConfigPartsHeadersOutputReference {
    return new DataSftpgoActionsActionsOptionsHttpConfigPartsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsHttpConfigParts {
}

export function dataSftpgoActionsActionsOptionsHttpConfigPartsToTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigParts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsHttpConfigPartsToHclTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigParts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsHttpConfigPartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsHttpConfigParts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsHttpConfigParts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // filepath - computed: true, optional: false, required: false
  public get filepath() {
    return this.getStringAttribute('filepath');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataSftpgoActionsActionsOptionsHttpConfigPartsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSftpgoActionsActionsOptionsHttpConfigPartsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsHttpConfigPartsOutputReference {
    return new DataSftpgoActionsActionsOptionsHttpConfigPartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsHttpConfigQueryParameters {
}

export function dataSftpgoActionsActionsOptionsHttpConfigQueryParametersToTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsHttpConfigQueryParametersToHclTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfigQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsHttpConfigQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsHttpConfigQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsHttpConfigQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSftpgoActionsActionsOptionsHttpConfigQueryParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsHttpConfigQueryParametersOutputReference {
    return new DataSftpgoActionsActionsOptionsHttpConfigQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsHttpConfig {
}

export function dataSftpgoActionsActionsOptionsHttpConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsHttpConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataSftpgoActionsActionsOptionsHttpConfigHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // parts - computed: true, optional: false, required: false
  private _parts = new DataSftpgoActionsActionsOptionsHttpConfigPartsList(this, "parts", false);
  public get parts() {
    return this._parts;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // query_parameters - computed: true, optional: false, required: false
  private _queryParameters = new DataSftpgoActionsActionsOptionsHttpConfigQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataSftpgoActionsActionsOptionsIdpConfig {
}

export function dataSftpgoActionsActionsOptionsIdpConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsIdpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsIdpConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsIdpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsIdpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsIdpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsIdpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getNumberAttribute('mode');
  }

  // template_admin - computed: true, optional: false, required: false
  public get templateAdmin() {
    return this.getStringAttribute('template_admin');
  }

  // template_user - computed: true, optional: false, required: false
  public get templateUser() {
    return this.getStringAttribute('template_user');
  }
}
export interface DataSftpgoActionsActionsOptionsPwdExpirationConfig {
}

export function dataSftpgoActionsActionsOptionsPwdExpirationConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsPwdExpirationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsPwdExpirationConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsPwdExpirationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsPwdExpirationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsPwdExpirationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsPwdExpirationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataSftpgoActionsActionsOptionsRetentionConfigFolders {
}

export function dataSftpgoActionsActionsOptionsRetentionConfigFoldersToTerraform(struct?: DataSftpgoActionsActionsOptionsRetentionConfigFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsRetentionConfigFoldersToHclTerraform(struct?: DataSftpgoActionsActionsOptionsRetentionConfigFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsRetentionConfigFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActionsOptionsRetentionConfigFolders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsRetentionConfigFolders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_empty_dirs - computed: true, optional: false, required: false
  public get deleteEmptyDirs() {
    return this.getBooleanAttribute('delete_empty_dirs');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }
}

export class DataSftpgoActionsActionsOptionsRetentionConfigFoldersList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOptionsRetentionConfigFoldersOutputReference {
    return new DataSftpgoActionsActionsOptionsRetentionConfigFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoActionsActionsOptionsRetentionConfig {
}

export function dataSftpgoActionsActionsOptionsRetentionConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsRetentionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsRetentionConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsRetentionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsRetentionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsRetentionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsRetentionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_folder - computed: true, optional: false, required: false
  public get archiveFolder() {
    return this.getStringAttribute('archive_folder');
  }

  // archive_path - computed: true, optional: false, required: false
  public get archivePath() {
    return this.getStringAttribute('archive_path');
  }

  // folders - computed: true, optional: false, required: false
  private _folders = new DataSftpgoActionsActionsOptionsRetentionConfigFoldersList(this, "folders", false);
  public get folders() {
    return this._folders;
  }
}
export interface DataSftpgoActionsActionsOptionsUserInactivityConfig {
}

export function dataSftpgoActionsActionsOptionsUserInactivityConfigToTerraform(struct?: DataSftpgoActionsActionsOptionsUserInactivityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsUserInactivityConfigToHclTerraform(struct?: DataSftpgoActionsActionsOptionsUserInactivityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsUserInactivityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptionsUserInactivityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptionsUserInactivityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_threshold - computed: true, optional: false, required: false
  public get deleteThreshold() {
    return this.getNumberAttribute('delete_threshold');
  }

  // disable_threshold - computed: true, optional: false, required: false
  public get disableThreshold() {
    return this.getNumberAttribute('disable_threshold');
  }
}
export interface DataSftpgoActionsActionsOptions {
}

export function dataSftpgoActionsActionsOptionsToTerraform(struct?: DataSftpgoActionsActionsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsOptionsToHclTerraform(struct?: DataSftpgoActionsActionsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoActionsActionsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActionsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmd_config - computed: true, optional: false, required: false
  private _cmdConfig = new DataSftpgoActionsActionsOptionsCmdConfigOutputReference(this, "cmd_config");
  public get cmdConfig() {
    return this._cmdConfig;
  }

  // email_config - computed: true, optional: false, required: false
  private _emailConfig = new DataSftpgoActionsActionsOptionsEmailConfigOutputReference(this, "email_config");
  public get emailConfig() {
    return this._emailConfig;
  }

  // fs_config - computed: true, optional: false, required: false
  private _fsConfig = new DataSftpgoActionsActionsOptionsFsConfigOutputReference(this, "fs_config");
  public get fsConfig() {
    return this._fsConfig;
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataSftpgoActionsActionsOptionsHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }

  // idp_config - computed: true, optional: false, required: false
  private _idpConfig = new DataSftpgoActionsActionsOptionsIdpConfigOutputReference(this, "idp_config");
  public get idpConfig() {
    return this._idpConfig;
  }

  // pwd_expiration_config - computed: true, optional: false, required: false
  private _pwdExpirationConfig = new DataSftpgoActionsActionsOptionsPwdExpirationConfigOutputReference(this, "pwd_expiration_config");
  public get pwdExpirationConfig() {
    return this._pwdExpirationConfig;
  }

  // retention_config - computed: true, optional: false, required: false
  private _retentionConfig = new DataSftpgoActionsActionsOptionsRetentionConfigOutputReference(this, "retention_config");
  public get retentionConfig() {
    return this._retentionConfig;
  }

  // user_inactivity_config - computed: true, optional: false, required: false
  private _userInactivityConfig = new DataSftpgoActionsActionsOptionsUserInactivityConfigOutputReference(this, "user_inactivity_config");
  public get userInactivityConfig() {
    return this._userInactivityConfig;
  }
}
export interface DataSftpgoActionsActions {
}

export function dataSftpgoActionsActionsToTerraform(struct?: DataSftpgoActionsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoActionsActionsToHclTerraform(struct?: DataSftpgoActionsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoActionsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoActionsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoActionsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataSftpgoActionsActionsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataSftpgoActionsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoActionsActionsOutputReference {
    return new DataSftpgoActionsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/actions sftpgo_actions}
*/
export class DataSftpgoActions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSftpgoActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSftpgoActions to import
  * @param importFromId The id of the existing DataSftpgoActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSftpgoActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/actions sftpgo_actions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSftpgoActionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSftpgoActionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_actions',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  private _actions = new DataSftpgoActionsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}

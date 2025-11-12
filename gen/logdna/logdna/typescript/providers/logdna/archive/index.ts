// https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#id Archive#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#integration Archive#integration}
  */
  readonly integration: string;
  /**
  * azblob_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#azblob_config Archive#azblob_config}
  */
  readonly azblobConfig?: ArchiveAzblobConfig;
  /**
  * dos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#dos_config Archive#dos_config}
  */
  readonly dosConfig?: ArchiveDosConfig;
  /**
  * gcs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#gcs_config Archive#gcs_config}
  */
  readonly gcsConfig?: ArchiveGcsConfig;
  /**
  * ibm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#ibm_config Archive#ibm_config}
  */
  readonly ibmConfig?: ArchiveIbmConfig;
  /**
  * s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#s3_config Archive#s3_config}
  */
  readonly s3Config?: ArchiveS3Config;
  /**
  * swift_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#swift_config Archive#swift_config}
  */
  readonly swiftConfig?: ArchiveSwiftConfig;
}
export interface ArchiveAzblobConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#accountkey Archive#accountkey}
  */
  readonly accountkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#accountname Archive#accountname}
  */
  readonly accountname: string;
}

export function archiveAzblobConfigToTerraform(struct?: ArchiveAzblobConfigOutputReference | ArchiveAzblobConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accountkey: cdktf.stringToTerraform(struct!.accountkey),
    accountname: cdktf.stringToTerraform(struct!.accountname),
  }
}


export function archiveAzblobConfigToHclTerraform(struct?: ArchiveAzblobConfigOutputReference | ArchiveAzblobConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accountkey: {
      value: cdktf.stringToHclTerraform(struct!.accountkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accountname: {
      value: cdktf.stringToHclTerraform(struct!.accountname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveAzblobConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveAzblobConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountkey = this._accountkey;
    }
    if (this._accountname !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountname = this._accountname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveAzblobConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountkey = undefined;
      this._accountname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountkey = value.accountkey;
      this._accountname = value.accountname;
    }
  }

  // accountkey - computed: false, optional: false, required: true
  private _accountkey?: string; 
  public get accountkey() {
    return this.getStringAttribute('accountkey');
  }
  public set accountkey(value: string) {
    this._accountkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountkeyInput() {
    return this._accountkey;
  }

  // accountname - computed: false, optional: false, required: true
  private _accountname?: string; 
  public get accountname() {
    return this.getStringAttribute('accountname');
  }
  public set accountname(value: string) {
    this._accountname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountnameInput() {
    return this._accountname;
  }
}
export interface ArchiveDosConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#accesskey Archive#accesskey}
  */
  readonly accesskey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#endpoint Archive#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#secretkey Archive#secretkey}
  */
  readonly secretkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#space Archive#space}
  */
  readonly space: string;
}

export function archiveDosConfigToTerraform(struct?: ArchiveDosConfigOutputReference | ArchiveDosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accesskey: cdktf.stringToTerraform(struct!.accesskey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    secretkey: cdktf.stringToTerraform(struct!.secretkey),
    space: cdktf.stringToTerraform(struct!.space),
  }
}


export function archiveDosConfigToHclTerraform(struct?: ArchiveDosConfigOutputReference | ArchiveDosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accesskey: {
      value: cdktf.stringToHclTerraform(struct!.accesskey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secretkey: {
      value: cdktf.stringToHclTerraform(struct!.secretkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveDosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveDosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accesskey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accesskey = this._accesskey;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._secretkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretkey = this._secretkey;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveDosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accesskey = undefined;
      this._endpoint = undefined;
      this._secretkey = undefined;
      this._space = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accesskey = value.accesskey;
      this._endpoint = value.endpoint;
      this._secretkey = value.secretkey;
      this._space = value.space;
    }
  }

  // accesskey - computed: false, optional: false, required: true
  private _accesskey?: string; 
  public get accesskey() {
    return this.getStringAttribute('accesskey');
  }
  public set accesskey(value: string) {
    this._accesskey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accesskeyInput() {
    return this._accesskey;
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

  // secretkey - computed: false, optional: false, required: true
  private _secretkey?: string; 
  public get secretkey() {
    return this.getStringAttribute('secretkey');
  }
  public set secretkey(value: string) {
    this._secretkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretkeyInput() {
    return this._secretkey;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }
}
export interface ArchiveGcsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#bucket Archive#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#projectid Archive#projectid}
  */
  readonly projectid: string;
}

export function archiveGcsConfigToTerraform(struct?: ArchiveGcsConfigOutputReference | ArchiveGcsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    projectid: cdktf.stringToTerraform(struct!.projectid),
  }
}


export function archiveGcsConfigToHclTerraform(struct?: ArchiveGcsConfigOutputReference | ArchiveGcsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    projectid: {
      value: cdktf.stringToHclTerraform(struct!.projectid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveGcsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveGcsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._projectid !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectid = this._projectid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveGcsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._projectid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._projectid = value.projectid;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // projectid - computed: false, optional: false, required: true
  private _projectid?: string; 
  public get projectid() {
    return this.getStringAttribute('projectid');
  }
  public set projectid(value: string) {
    this._projectid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectidInput() {
    return this._projectid;
  }
}
export interface ArchiveIbmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#apikey Archive#apikey}
  */
  readonly apikey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#bucket Archive#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#endpoint Archive#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#resourceinstanceid Archive#resourceinstanceid}
  */
  readonly resourceinstanceid: string;
}

export function archiveIbmConfigToTerraform(struct?: ArchiveIbmConfigOutputReference | ArchiveIbmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apikey: cdktf.stringToTerraform(struct!.apikey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    resourceinstanceid: cdktf.stringToTerraform(struct!.resourceinstanceid),
  }
}


export function archiveIbmConfigToHclTerraform(struct?: ArchiveIbmConfigOutputReference | ArchiveIbmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apikey: {
      value: cdktf.stringToHclTerraform(struct!.apikey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourceinstanceid: {
      value: cdktf.stringToHclTerraform(struct!.resourceinstanceid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveIbmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveIbmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apikey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apikey = this._apikey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._resourceinstanceid !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceinstanceid = this._resourceinstanceid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveIbmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apikey = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._resourceinstanceid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apikey = value.apikey;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._resourceinstanceid = value.resourceinstanceid;
    }
  }

  // apikey - computed: false, optional: false, required: true
  private _apikey?: string; 
  public get apikey() {
    return this.getStringAttribute('apikey');
  }
  public set apikey(value: string) {
    this._apikey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // resourceinstanceid - computed: false, optional: false, required: true
  private _resourceinstanceid?: string; 
  public get resourceinstanceid() {
    return this.getStringAttribute('resourceinstanceid');
  }
  public set resourceinstanceid(value: string) {
    this._resourceinstanceid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceinstanceidInput() {
    return this._resourceinstanceid;
  }
}
export interface ArchiveS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#bucket Archive#bucket}
  */
  readonly bucket: string;
}

export function archiveS3ConfigToTerraform(struct?: ArchiveS3ConfigOutputReference | ArchiveS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
  }
}


export function archiveS3ConfigToHclTerraform(struct?: ArchiveS3ConfigOutputReference | ArchiveS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }
}
export interface ArchiveSwiftConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#authurl Archive#authurl}
  */
  readonly authurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#expires Archive#expires}
  */
  readonly expires?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#password Archive#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#tenantname Archive#tenantname}
  */
  readonly tenantname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#username Archive#username}
  */
  readonly username: string;
}

export function archiveSwiftConfigToTerraform(struct?: ArchiveSwiftConfigOutputReference | ArchiveSwiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authurl: cdktf.stringToTerraform(struct!.authurl),
    expires: cdktf.numberToTerraform(struct!.expires),
    password: cdktf.stringToTerraform(struct!.password),
    tenantname: cdktf.stringToTerraform(struct!.tenantname),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function archiveSwiftConfigToHclTerraform(struct?: ArchiveSwiftConfigOutputReference | ArchiveSwiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authurl: {
      value: cdktf.stringToHclTerraform(struct!.authurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires: {
      value: cdktf.numberToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenantname: {
      value: cdktf.stringToHclTerraform(struct!.tenantname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveSwiftConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchiveSwiftConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authurl = this._authurl;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tenantname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantname = this._tenantname;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveSwiftConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authurl = undefined;
      this._expires = undefined;
      this._password = undefined;
      this._tenantname = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authurl = value.authurl;
      this._expires = value.expires;
      this._password = value.password;
      this._tenantname = value.tenantname;
      this._username = value.username;
    }
  }

  // authurl - computed: false, optional: false, required: true
  private _authurl?: string; 
  public get authurl() {
    return this.getStringAttribute('authurl');
  }
  public set authurl(value: string) {
    this._authurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authurlInput() {
    return this._authurl;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: number; 
  public get expires() {
    return this.getNumberAttribute('expires');
  }
  public set expires(value: number) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tenantname - computed: false, optional: false, required: true
  private _tenantname?: string; 
  public get tenantname() {
    return this.getStringAttribute('tenantname');
  }
  public set tenantname(value: string) {
    this._tenantname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantnameInput() {
    return this._tenantname;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive logdna_archive}
*/
export class Archive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logdna_archive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Archive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Archive to import
  * @param importFromId The id of the existing Archive that should be imported. Refer to the {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Archive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logdna_archive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/archive logdna_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: ArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'logdna_archive',
      terraformGeneratorMetadata: {
        providerName: 'logdna',
        providerVersion: '1.17.2',
        providerVersionConstraint: '1.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._integration = config.integration;
    this._azblobConfig.internalValue = config.azblobConfig;
    this._dosConfig.internalValue = config.dosConfig;
    this._gcsConfig.internalValue = config.gcsConfig;
    this._ibmConfig.internalValue = config.ibmConfig;
    this._s3Config.internalValue = config.s3Config;
    this._swiftConfig.internalValue = config.swiftConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // azblob_config - computed: false, optional: true, required: false
  private _azblobConfig = new ArchiveAzblobConfigOutputReference(this, "azblob_config");
  public get azblobConfig() {
    return this._azblobConfig;
  }
  public putAzblobConfig(value: ArchiveAzblobConfig) {
    this._azblobConfig.internalValue = value;
  }
  public resetAzblobConfig() {
    this._azblobConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azblobConfigInput() {
    return this._azblobConfig.internalValue;
  }

  // dos_config - computed: false, optional: true, required: false
  private _dosConfig = new ArchiveDosConfigOutputReference(this, "dos_config");
  public get dosConfig() {
    return this._dosConfig;
  }
  public putDosConfig(value: ArchiveDosConfig) {
    this._dosConfig.internalValue = value;
  }
  public resetDosConfig() {
    this._dosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosConfigInput() {
    return this._dosConfig.internalValue;
  }

  // gcs_config - computed: false, optional: true, required: false
  private _gcsConfig = new ArchiveGcsConfigOutputReference(this, "gcs_config");
  public get gcsConfig() {
    return this._gcsConfig;
  }
  public putGcsConfig(value: ArchiveGcsConfig) {
    this._gcsConfig.internalValue = value;
  }
  public resetGcsConfig() {
    this._gcsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsConfigInput() {
    return this._gcsConfig.internalValue;
  }

  // ibm_config - computed: false, optional: true, required: false
  private _ibmConfig = new ArchiveIbmConfigOutputReference(this, "ibm_config");
  public get ibmConfig() {
    return this._ibmConfig;
  }
  public putIbmConfig(value: ArchiveIbmConfig) {
    this._ibmConfig.internalValue = value;
  }
  public resetIbmConfig() {
    this._ibmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmConfigInput() {
    return this._ibmConfig.internalValue;
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new ArchiveS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: ArchiveS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }

  // swift_config - computed: false, optional: true, required: false
  private _swiftConfig = new ArchiveSwiftConfigOutputReference(this, "swift_config");
  public get swiftConfig() {
    return this._swiftConfig;
  }
  public putSwiftConfig(value: ArchiveSwiftConfig) {
    this._swiftConfig.internalValue = value;
  }
  public resetSwiftConfig() {
    this._swiftConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftConfigInput() {
    return this._swiftConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      azblob_config: archiveAzblobConfigToTerraform(this._azblobConfig.internalValue),
      dos_config: archiveDosConfigToTerraform(this._dosConfig.internalValue),
      gcs_config: archiveGcsConfigToTerraform(this._gcsConfig.internalValue),
      ibm_config: archiveIbmConfigToTerraform(this._ibmConfig.internalValue),
      s3_config: archiveS3ConfigToTerraform(this._s3Config.internalValue),
      swift_config: archiveSwiftConfigToTerraform(this._swiftConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration: {
        value: cdktf.stringToHclTerraform(this._integration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azblob_config: {
        value: archiveAzblobConfigToHclTerraform(this._azblobConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchiveAzblobConfigList",
      },
      dos_config: {
        value: archiveDosConfigToHclTerraform(this._dosConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchiveDosConfigList",
      },
      gcs_config: {
        value: archiveGcsConfigToHclTerraform(this._gcsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchiveGcsConfigList",
      },
      ibm_config: {
        value: archiveIbmConfigToHclTerraform(this._ibmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchiveIbmConfigList",
      },
      s3_config: {
        value: archiveS3ConfigToHclTerraform(this._s3Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchiveS3ConfigList",
      },
      swift_config: {
        value: archiveSwiftConfigToHclTerraform(this._swiftConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchiveSwiftConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

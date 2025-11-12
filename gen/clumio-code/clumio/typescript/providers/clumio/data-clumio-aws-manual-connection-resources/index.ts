// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClumioAwsManualConnectionResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Account ID to be connected to Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#account_native_id DataClumioAwsManualConnectionResources#account_native_id}
  */
  readonly accountNativeId: string;
  /**
  * Assets to be connected to Clumio. Note that `mssql` is only available for legacy connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#asset_types_enabled DataClumioAwsManualConnectionResources#asset_types_enabled}
  */
  readonly assetTypesEnabled: DataClumioAwsManualConnectionResourcesAssetTypesEnabled;
  /**
  * AWS Region to be connected to Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#aws_region DataClumioAwsManualConnectionResources#aws_region}
  */
  readonly awsRegion: string;
}
export interface DataClumioAwsManualConnectionResourcesAssetTypesEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#ddb DataClumioAwsManualConnectionResources#ddb}
  */
  readonly ddb: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#ebs DataClumioAwsManualConnectionResources#ebs}
  */
  readonly ebs: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#mssql DataClumioAwsManualConnectionResources#mssql}
  */
  readonly mssql: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#rds DataClumioAwsManualConnectionResources#rds}
  */
  readonly rds: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#s3 DataClumioAwsManualConnectionResources#s3}
  */
  readonly s3: boolean | cdktf.IResolvable;
}

export function dataClumioAwsManualConnectionResourcesAssetTypesEnabledToTerraform(struct?: DataClumioAwsManualConnectionResourcesAssetTypesEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddb: cdktf.booleanToTerraform(struct!.ddb),
    ebs: cdktf.booleanToTerraform(struct!.ebs),
    mssql: cdktf.booleanToTerraform(struct!.mssql),
    rds: cdktf.booleanToTerraform(struct!.rds),
    s3: cdktf.booleanToTerraform(struct!.s3),
  }
}


export function dataClumioAwsManualConnectionResourcesAssetTypesEnabledToHclTerraform(struct?: DataClumioAwsManualConnectionResourcesAssetTypesEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddb: {
      value: cdktf.booleanToHclTerraform(struct!.ddb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs: {
      value: cdktf.booleanToHclTerraform(struct!.ebs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mssql: {
      value: cdktf.booleanToHclTerraform(struct!.mssql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rds: {
      value: cdktf.booleanToHclTerraform(struct!.rds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3: {
      value: cdktf.booleanToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataClumioAwsManualConnectionResourcesAssetTypesEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataClumioAwsManualConnectionResourcesAssetTypesEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddb = this._ddb;
    }
    if (this._ebs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs;
    }
    if (this._mssql !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssql = this._mssql;
    }
    if (this._rds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rds = this._rds;
    }
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClumioAwsManualConnectionResourcesAssetTypesEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddb = undefined;
      this._ebs = undefined;
      this._mssql = undefined;
      this._rds = undefined;
      this._s3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddb = value.ddb;
      this._ebs = value.ebs;
      this._mssql = value.mssql;
      this._rds = value.rds;
      this._s3 = value.s3;
    }
  }

  // ddb - computed: false, optional: false, required: true
  private _ddb?: boolean | cdktf.IResolvable; 
  public get ddb() {
    return this.getBooleanAttribute('ddb');
  }
  public set ddb(value: boolean | cdktf.IResolvable) {
    this._ddb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddbInput() {
    return this._ddb;
  }

  // ebs - computed: false, optional: false, required: true
  private _ebs?: boolean | cdktf.IResolvable; 
  public get ebs() {
    return this.getBooleanAttribute('ebs');
  }
  public set ebs(value: boolean | cdktf.IResolvable) {
    this._ebs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs;
  }

  // mssql - computed: false, optional: false, required: true
  private _mssql?: boolean | cdktf.IResolvable; 
  public get mssql() {
    return this.getBooleanAttribute('mssql');
  }
  public set mssql(value: boolean | cdktf.IResolvable) {
    this._mssql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlInput() {
    return this._mssql;
  }

  // rds - computed: false, optional: false, required: true
  private _rds?: boolean | cdktf.IResolvable; 
  public get rds() {
    return this.getBooleanAttribute('rds');
  }
  public set rds(value: boolean | cdktf.IResolvable) {
    this._rds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInput() {
    return this._rds;
  }

  // s3 - computed: false, optional: false, required: true
  private _s3?: boolean | cdktf.IResolvable; 
  public get s3() {
    return this.getBooleanAttribute('s3');
  }
  public set s3(value: boolean | cdktf.IResolvable) {
    this._s3 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources clumio_aws_manual_connection_resources}
*/
export class DataClumioAwsManualConnectionResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_aws_manual_connection_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClumioAwsManualConnectionResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClumioAwsManualConnectionResources to import
  * @param importFromId The id of the existing DataClumioAwsManualConnectionResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClumioAwsManualConnectionResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_aws_manual_connection_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/aws_manual_connection_resources clumio_aws_manual_connection_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClumioAwsManualConnectionResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataClumioAwsManualConnectionResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_aws_manual_connection_resources',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNativeId = config.accountNativeId;
    this._assetTypesEnabled.internalValue = config.assetTypesEnabled;
    this._awsRegion = config.awsRegion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_native_id - computed: false, optional: false, required: true
  private _accountNativeId?: string; 
  public get accountNativeId() {
    return this.getStringAttribute('account_native_id');
  }
  public set accountNativeId(value: string) {
    this._accountNativeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNativeIdInput() {
    return this._accountNativeId;
  }

  // asset_types_enabled - computed: false, optional: false, required: true
  private _assetTypesEnabled = new DataClumioAwsManualConnectionResourcesAssetTypesEnabledOutputReference(this, "asset_types_enabled");
  public get assetTypesEnabled() {
    return this._assetTypesEnabled;
  }
  public putAssetTypesEnabled(value: DataClumioAwsManualConnectionResourcesAssetTypesEnabled) {
    this._assetTypesEnabled.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypesEnabledInput() {
    return this._assetTypesEnabled.internalValue;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getStringAttribute('resources');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_native_id: cdktf.stringToTerraform(this._accountNativeId),
      asset_types_enabled: dataClumioAwsManualConnectionResourcesAssetTypesEnabledToTerraform(this._assetTypesEnabled.internalValue),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_native_id: {
        value: cdktf.stringToHclTerraform(this._accountNativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_types_enabled: {
        value: dataClumioAwsManualConnectionResourcesAssetTypesEnabledToHclTerraform(this._assetTypesEnabled.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataClumioAwsManualConnectionResourcesAssetTypesEnabled",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

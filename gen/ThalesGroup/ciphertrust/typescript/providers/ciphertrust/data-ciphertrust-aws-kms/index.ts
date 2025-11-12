// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_kms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustAwsKmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name or ID of the AWS connection. If provided, details of all KMS resources belonging to this connection will be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_kms#aws_connection DataCiphertrustAwsKms#aws_connection}
  */
  readonly awsConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_kms#id DataCiphertrustAwsKms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the KSM. If provided, only details for this KMS will be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_kms#kms_name DataCiphertrustAwsKms#kms_name}
  */
  readonly kmsName?: string;
}
export interface DataCiphertrustAwsKmsKms {
}

export function dataCiphertrustAwsKmsKmsToTerraform(struct?: DataCiphertrustAwsKmsKms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiphertrustAwsKmsKmsToHclTerraform(struct?: DataCiphertrustAwsKmsKms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiphertrustAwsKmsKmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiphertrustAwsKmsKms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustAwsKmsKms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_connection - computed: true, optional: false, required: false
  public get awsConnection() {
    return this.getStringAttribute('aws_connection');
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // kms_name - computed: true, optional: false, required: false
  public get kmsName() {
    return this.getStringAttribute('kms_name');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }
}

export class DataCiphertrustAwsKmsKmsList extends cdktf.ComplexList {

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
  public get(index: number): DataCiphertrustAwsKmsKmsOutputReference {
    return new DataCiphertrustAwsKmsKmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_kms ciphertrust_aws_kms}
*/
export class DataCiphertrustAwsKms extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_kms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustAwsKms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustAwsKms to import
  * @param importFromId The id of the existing DataCiphertrustAwsKms that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_kms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustAwsKms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_kms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_kms ciphertrust_aws_kms} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustAwsKmsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustAwsKmsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_kms',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsConnection = config.awsConnection;
    this._id = config.id;
    this._kmsName = config.kmsName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_connection - computed: false, optional: true, required: false
  private _awsConnection?: string; 
  public get awsConnection() {
    return this.getStringAttribute('aws_connection');
  }
  public set awsConnection(value: string) {
    this._awsConnection = value;
  }
  public resetAwsConnection() {
    this._awsConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConnectionInput() {
    return this._awsConnection;
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

  // kms - computed: true, optional: false, required: false
  private _kms = new DataCiphertrustAwsKmsKmsList(this, "kms", false);
  public get kms() {
    return this._kms;
  }

  // kms_name - computed: false, optional: true, required: false
  private _kmsName?: string; 
  public get kmsName() {
    return this.getStringAttribute('kms_name');
  }
  public set kmsName(value: string) {
    this._kmsName = value;
  }
  public resetKmsName() {
    this._kmsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsNameInput() {
    return this._kmsName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_connection: cdktf.stringToTerraform(this._awsConnection),
      id: cdktf.stringToTerraform(this._id),
      kms_name: cdktf.stringToTerraform(this._kmsName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_connection: {
        value: cdktf.stringToHclTerraform(this._awsConnection),
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
      kms_name: {
        value: cdktf.stringToHclTerraform(this._kmsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

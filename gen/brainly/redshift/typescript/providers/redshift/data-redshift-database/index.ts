// https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedshiftDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database#id DataRedshiftDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database#name DataRedshiftDatabase#name}
  */
  readonly name: string;
  /**
  * datashare_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database#datashare_source DataRedshiftDatabase#datashare_source}
  */
  readonly datashareSource?: DataRedshiftDatabaseDatashareSource;
}
export interface DataRedshiftDatabaseDatashareSource {
  /**
  * The AWS account ID of the producer cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database#account_id DataRedshiftDatabase#account_id}
  */
  readonly accountId?: string;
  /**
  * The namespace (guid) of the producer cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database#namespace DataRedshiftDatabase#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of the datashare on the producer cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database#share_name DataRedshiftDatabase#share_name}
  */
  readonly shareName?: string;
}

export function dataRedshiftDatabaseDatashareSourceToTerraform(struct?: DataRedshiftDatabaseDatashareSourceOutputReference | DataRedshiftDatabaseDatashareSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function dataRedshiftDatabaseDatashareSourceToHclTerraform(struct?: DataRedshiftDatabaseDatashareSourceOutputReference | DataRedshiftDatabaseDatashareSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedshiftDatabaseDatashareSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRedshiftDatabaseDatashareSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedshiftDatabaseDatashareSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._namespace = undefined;
      this._shareName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._namespace = value.namespace;
      this._shareName = value.shareName;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // share_name - computed: true, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database redshift_database}
*/
export class DataRedshiftDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedshiftDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedshiftDatabase to import
  * @param importFromId The id of the existing DataRedshiftDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedshiftDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/database redshift_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedshiftDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataRedshiftDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_database',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '1.1.0'
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
    this._name = config.name;
    this._datashareSource.internalValue = config.datashareSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_limit - computed: true, optional: false, required: false
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // datashare_source - computed: false, optional: true, required: false
  private _datashareSource = new DataRedshiftDatabaseDatashareSourceOutputReference(this, "datashare_source");
  public get datashareSource() {
    return this._datashareSource;
  }
  public putDatashareSource(value: DataRedshiftDatabaseDatashareSource) {
    this._datashareSource.internalValue = value;
  }
  public resetDatashareSource() {
    this._datashareSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datashareSourceInput() {
    return this._datashareSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      datashare_source: dataRedshiftDatabaseDatashareSourceToTerraform(this._datashareSource.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datashare_source: {
        value: dataRedshiftDatabaseDatashareSourceToHclTerraform(this._datashareSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRedshiftDatabaseDatashareSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

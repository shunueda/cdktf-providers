// https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#charset DbDatabase#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#collate DbDatabase#collate}
  */
  readonly collate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#dbms_id DbDatabase#dbms_id}
  */
  readonly dbmsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#id DbDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#instance_id DbDatabase#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#name DbDatabase#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#timeouts DbDatabase#timeouts}
  */
  readonly timeouts?: DbDatabaseTimeouts;
}
export interface DbDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#create DbDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#delete DbDatabase#delete}
  */
  readonly delete?: string;
}

export function dbDatabaseTimeoutsToTerraform(struct?: DbDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dbDatabaseTimeoutsToHclTerraform(struct?: DbDatabaseTimeouts | cdktf.IResolvable): any {
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

export class DbDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbDatabaseTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database mcs_db_database}
*/
export class DbDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcs_db_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbDatabase to import
  * @param importFromId The id of the existing DbDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcs_db_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/db_database mcs_db_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DbDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'mcs_db_database',
      terraformGeneratorMetadata: {
        providerName: 'mcs',
        providerVersion: '0.6.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._charset = config.charset;
    this._collate = config.collate;
    this._dbmsId = config.dbmsId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charset - computed: false, optional: true, required: false
  private _charset?: string; 
  public get charset() {
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  public resetCharset() {
    this._charset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset;
  }

  // collate - computed: false, optional: true, required: false
  private _collate?: string; 
  public get collate() {
    return this.getStringAttribute('collate');
  }
  public set collate(value: string) {
    this._collate = value;
  }
  public resetCollate() {
    this._collate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collateInput() {
    return this._collate;
  }

  // dbms_id - computed: false, optional: true, required: false
  private _dbmsId?: string; 
  public get dbmsId() {
    return this.getStringAttribute('dbms_id');
  }
  public set dbmsId(value: string) {
    this._dbmsId = value;
  }
  public resetDbmsId() {
    this._dbmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbmsIdInput() {
    return this._dbmsId;
  }

  // dbms_type - computed: true, optional: false, required: false
  public get dbmsType() {
    return this.getStringAttribute('dbms_type');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DbDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbDatabaseTimeouts) {
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
      charset: cdktf.stringToTerraform(this._charset),
      collate: cdktf.stringToTerraform(this._collate),
      dbms_id: cdktf.stringToTerraform(this._dbmsId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dbDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      charset: {
        value: cdktf.stringToHclTerraform(this._charset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collate: {
        value: cdktf.stringToHclTerraform(this._collate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbms_id: {
        value: cdktf.stringToHclTerraform(this._dbmsId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      timeouts: {
        value: dbDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/data-sources/versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSkysqlVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/data-sources/versions#topology DataSkysqlVersions#topology}
  */
  readonly topology?: string;
}
export interface DataSkysqlVersionsVersions {
}

export function dataSkysqlVersionsVersionsToTerraform(struct?: DataSkysqlVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSkysqlVersionsVersionsToHclTerraform(struct?: DataSkysqlVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSkysqlVersionsVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSkysqlVersionsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSkysqlVersionsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_major - computed: true, optional: false, required: false
  public get isMajor() {
    return this.getBooleanAttribute('is_major');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // release_notes_url - computed: true, optional: false, required: false
  public get releaseNotesUrl() {
    return this.getStringAttribute('release_notes_url');
  }

  // topology - computed: true, optional: false, required: false
  public get topology() {
    return this.getStringAttribute('topology');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataSkysqlVersionsVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSkysqlVersionsVersionsOutputReference {
    return new DataSkysqlVersionsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/data-sources/versions skysql_versions}
*/
export class DataSkysqlVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "skysql_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSkysqlVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSkysqlVersions to import
  * @param importFromId The id of the existing DataSkysqlVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/data-sources/versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSkysqlVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "skysql_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/data-sources/versions skysql_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSkysqlVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSkysqlVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'skysql_versions',
      terraformGeneratorMetadata: {
        providerName: 'skysql',
        providerVersion: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._topology = config.topology;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataSkysqlVersionsVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      topology: cdktf.stringToTerraform(this._topology),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      topology: {
        value: cdktf.stringToHclTerraform(this._topology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

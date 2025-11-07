// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeFirmwareRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of repository names which can filter the datasource. Length should be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_repository#names DataOmeFirmwareRepository#names}
  */
  readonly names?: string[];
}
export interface DataOmeFirmwareRepositoryFbcRepositories {
}

export function dataOmeFirmwareRepositoryFbcRepositoriesToTerraform(struct?: DataOmeFirmwareRepositoryFbcRepositories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeFirmwareRepositoryFbcRepositoriesToHclTerraform(struct?: DataOmeFirmwareRepositoryFbcRepositories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeFirmwareRepositoryFbcRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeFirmwareRepositoryFbcRepositories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeFirmwareRepositoryFbcRepositories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_existing_catalog - computed: true, optional: false, required: false
  public get backupExistingCatalog() {
    return this.getBooleanAttribute('backup_existing_catalog');
  }

  // check_certificate - computed: true, optional: false, required: false
  public get checkCertificate() {
    return this.getBooleanAttribute('check_certificate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repository_type - computed: true, optional: false, required: false
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOmeFirmwareRepositoryFbcRepositoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeFirmwareRepositoryFbcRepositoriesOutputReference {
    return new DataOmeFirmwareRepositoryFbcRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_repository ome_firmware_repository}
*/
export class DataOmeFirmwareRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_firmware_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeFirmwareRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeFirmwareRepository to import
  * @param importFromId The id of the existing DataOmeFirmwareRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeFirmwareRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_firmware_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/firmware_repository ome_firmware_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeFirmwareRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOmeFirmwareRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_firmware_repository',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._names = config.names;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fbc_repositories - computed: true, optional: false, required: false
  private _fbcRepositories = new DataOmeFirmwareRepositoryFbcRepositoriesList(this, "fbc_repositories", false);
  public get fbcRepositories() {
    return this._fbcRepositories;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._names),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._names),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

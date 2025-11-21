// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/cifs_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapCifsShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/cifs_share#cx_profile_name DataNetappOntapCifsShare#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Specifies the name of the CIFS share that you want to create. If this
  * 				is a home directory share then the share name includes the pattern as
  * 				%w (Windows user name), %u (UNIX user name) and %d (Windows domain name)
  * 				variables in any combination with this parameter to generate shares dynamically.
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/cifs_share#name DataNetappOntapCifsShare#name}
  */
  readonly name: string;
  /**
  * IPInterface svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/cifs_share#svm_name DataNetappOntapCifsShare#svm_name}
  */
  readonly svmName?: string;
}
export interface DataNetappOntapCifsShareAcls {
}

export function dataNetappOntapCifsShareAclsToTerraform(struct?: DataNetappOntapCifsShareAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapCifsShareAclsToHclTerraform(struct?: DataNetappOntapCifsShareAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapCifsShareAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapCifsShareAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapCifsShareAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_or_group - computed: true, optional: false, required: false
  public get userOrGroup() {
    return this.getStringAttribute('user_or_group');
  }
}

export class DataNetappOntapCifsShareAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapCifsShareAclsOutputReference {
    return new DataNetappOntapCifsShareAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/cifs_share netapp-ontap_cifs_share}
*/
export class DataNetappOntapCifsShare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_cifs_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapCifsShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapCifsShare to import
  * @param importFromId The id of the existing DataNetappOntapCifsShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/cifs_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapCifsShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_cifs_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/cifs_share netapp-ontap_cifs_share} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapCifsShareConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapCifsShareConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_cifs_share',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_based_enumeration - computed: true, optional: false, required: false
  public get accessBasedEnumeration() {
    return this.getBooleanAttribute('access_based_enumeration');
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataNetappOntapCifsShareAclsList(this, "acls", true);
  public get acls() {
    return this._acls;
  }

  // change_notify - computed: true, optional: false, required: false
  public get changeNotify() {
    return this.getBooleanAttribute('change_notify');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // continuously_available - computed: true, optional: false, required: false
  public get continuouslyAvailable() {
    return this.getBooleanAttribute('continuously_available');
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // dir_umask - computed: true, optional: false, required: false
  public get dirUmask() {
    return this.getNumberAttribute('dir_umask');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }

  // file_umask - computed: true, optional: false, required: false
  public get fileUmask() {
    return this.getNumberAttribute('file_umask');
  }

  // force_group_for_create - computed: true, optional: false, required: false
  public get forceGroupForCreate() {
    return this.getStringAttribute('force_group_for_create');
  }

  // home_directory - computed: true, optional: false, required: false
  public get homeDirectory() {
    return this.getBooleanAttribute('home_directory');
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

  // namespace_caching - computed: true, optional: false, required: false
  public get namespaceCaching() {
    return this.getBooleanAttribute('namespace_caching');
  }

  // no_strict_security - computed: true, optional: false, required: false
  public get noStrictSecurity() {
    return this.getBooleanAttribute('no_strict_security');
  }

  // offline_files - computed: true, optional: false, required: false
  public get offlineFiles() {
    return this.getStringAttribute('offline_files');
  }

  // oplocks - computed: true, optional: false, required: false
  public get oplocks() {
    return this.getBooleanAttribute('oplocks');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // show_snapshot - computed: true, optional: false, required: false
  public get showSnapshot() {
    return this.getBooleanAttribute('show_snapshot');
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // unix_symlink - computed: true, optional: false, required: false
  public get unixSymlink() {
    return this.getStringAttribute('unix_symlink');
  }

  // vscan_profile - computed: true, optional: false, required: false
  public get vscanProfile() {
    return this.getStringAttribute('vscan_profile');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
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
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

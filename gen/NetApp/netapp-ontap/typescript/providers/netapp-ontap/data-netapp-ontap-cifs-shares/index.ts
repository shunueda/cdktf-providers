// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapCifsSharesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#cx_profile_name DataNetappOntapCifsShares#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#filter DataNetappOntapCifsShares#filter}
  */
  readonly filter?: DataNetappOntapCifsSharesFilter;
}
export interface DataNetappOntapCifsSharesFilter {
  /**
  * ProtocolsCIFSShare name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#name DataNetappOntapCifsShares#name}
  */
  readonly name?: string;
  /**
  * ProtocolsCIFSShare svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#svm_name DataNetappOntapCifsShares#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapCifsSharesFilterToTerraform(struct?: DataNetappOntapCifsSharesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapCifsSharesFilterToHclTerraform(struct?: DataNetappOntapCifsSharesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapCifsSharesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapCifsSharesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapCifsSharesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._svmName = value.svmName;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
}
export interface DataNetappOntapCifsSharesProtocolsCifsSharesAcls {
}

export function dataNetappOntapCifsSharesProtocolsCifsSharesAclsToTerraform(struct?: DataNetappOntapCifsSharesProtocolsCifsSharesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapCifsSharesProtocolsCifsSharesAclsToHclTerraform(struct?: DataNetappOntapCifsSharesProtocolsCifsSharesAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapCifsSharesProtocolsCifsSharesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapCifsSharesProtocolsCifsSharesAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapCifsSharesProtocolsCifsSharesAcls | undefined) {
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

export class DataNetappOntapCifsSharesProtocolsCifsSharesAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapCifsSharesProtocolsCifsSharesAclsOutputReference {
    return new DataNetappOntapCifsSharesProtocolsCifsSharesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetappOntapCifsSharesProtocolsCifsShares {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#cx_profile_name DataNetappOntapCifsShares#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Specifies the name of the CIFS share that you want to create. If this
  * 							is a home directory share then the share name includes the pattern as
  * 							%w (Windows user name), %u (UNIX user name) and %d (Windows domain name)
  * 							variables in any combination with this parameter to generate shares dynamically.
  * 							
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#name DataNetappOntapCifsShares#name}
  */
  readonly name: string;
  /**
  * IPInterface svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#svm_name DataNetappOntapCifsShares#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapCifsSharesProtocolsCifsSharesToTerraform(struct?: DataNetappOntapCifsSharesProtocolsCifsShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
    name: cdktf.stringToTerraform(struct!.name),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapCifsSharesProtocolsCifsSharesToHclTerraform(struct?: DataNetappOntapCifsSharesProtocolsCifsShares): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cx_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.cxProfileName),
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
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapCifsSharesProtocolsCifsSharesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapCifsSharesProtocolsCifsShares | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxProfileName = this._cxProfileName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapCifsSharesProtocolsCifsShares | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cxProfileName = undefined;
      this._name = undefined;
      this._svmName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cxProfileName = value.cxProfileName;
      this._name = value.name;
      this._svmName = value.svmName;
    }
  }

  // acls - computed: true, optional: false, required: false
  private _acls = new DataNetappOntapCifsSharesProtocolsCifsSharesAclsList(this, "acls", true);
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

  // cx_profile_name - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

  // svm_name - computed: true, optional: true, required: false
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
}

export class DataNetappOntapCifsSharesProtocolsCifsSharesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapCifsSharesProtocolsCifsShares[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapCifsSharesProtocolsCifsSharesOutputReference {
    return new DataNetappOntapCifsSharesProtocolsCifsSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares netapp-ontap_cifs_shares}
*/
export class DataNetappOntapCifsShares extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_cifs_shares";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapCifsShares resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapCifsShares to import
  * @param importFromId The id of the existing DataNetappOntapCifsShares that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapCifsShares to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_cifs_shares", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_shares netapp-ontap_cifs_shares} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapCifsSharesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapCifsSharesConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_cifs_shares',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
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
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapCifsSharesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapCifsSharesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // protocols_cifs_shares - computed: true, optional: false, required: false
  private _protocolsCifsShares = new DataNetappOntapCifsSharesProtocolsCifsSharesList(this, "protocols_cifs_shares", false);
  public get protocolsCifsShares() {
    return this._protocolsCifsShares;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapCifsSharesFilterToTerraform(this._filter.internalValue),
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
      filter: {
        value: dataNetappOntapCifsSharesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapCifsSharesFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapNameServicesLdapsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps#cx_profile_name DataNetappOntapNameServicesLdaps#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps#filter DataNetappOntapNameServicesLdaps#filter}
  */
  readonly filter?: DataNetappOntapNameServicesLdapsFilter;
}
export interface DataNetappOntapNameServicesLdapsFilter {
  /**
  * Specifies the default search scope for LDAP queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps#base_scope DataNetappOntapNameServicesLdaps#base_scope}
  */
  readonly baseScope?: string;
  /**
  * The minimum bind authentication level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps#min_bind_level DataNetappOntapNameServicesLdaps#min_bind_level}
  */
  readonly minBindLevel?: string;
  /**
  * NameServicesLDAP svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps#svm_name DataNetappOntapNameServicesLdaps#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapNameServicesLdapsFilterToTerraform(struct?: DataNetappOntapNameServicesLdapsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_scope: cdktf.stringToTerraform(struct!.baseScope),
    min_bind_level: cdktf.stringToTerraform(struct!.minBindLevel),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapNameServicesLdapsFilterToHclTerraform(struct?: DataNetappOntapNameServicesLdapsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_scope: {
      value: cdktf.stringToHclTerraform(struct!.baseScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_bind_level: {
      value: cdktf.stringToHclTerraform(struct!.minBindLevel),
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

export class DataNetappOntapNameServicesLdapsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapNameServicesLdapsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseScope = this._baseScope;
    }
    if (this._minBindLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBindLevel = this._minBindLevel;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNameServicesLdapsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseScope = undefined;
      this._minBindLevel = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseScope = value.baseScope;
      this._minBindLevel = value.minBindLevel;
      this._svmName = value.svmName;
    }
  }

  // base_scope - computed: false, optional: true, required: false
  private _baseScope?: string; 
  public get baseScope() {
    return this.getStringAttribute('base_scope');
  }
  public set baseScope(value: string) {
    this._baseScope = value;
  }
  public resetBaseScope() {
    this._baseScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseScopeInput() {
    return this._baseScope;
  }

  // min_bind_level - computed: false, optional: true, required: false
  private _minBindLevel?: string; 
  public get minBindLevel() {
    return this.getStringAttribute('min_bind_level');
  }
  public set minBindLevel(value: string) {
    this._minBindLevel = value;
  }
  public resetMinBindLevel() {
    this._minBindLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBindLevelInput() {
    return this._minBindLevel;
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
export interface DataNetappOntapNameServicesLdapsNameServicesLdaps {
}

export function dataNetappOntapNameServicesLdapsNameServicesLdapsToTerraform(struct?: DataNetappOntapNameServicesLdapsNameServicesLdaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapNameServicesLdapsNameServicesLdapsToHclTerraform(struct?: DataNetappOntapNameServicesLdapsNameServicesLdaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapNameServicesLdapsNameServicesLdapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapNameServicesLdapsNameServicesLdaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapNameServicesLdapsNameServicesLdaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_domain - computed: true, optional: false, required: false
  public get adDomain() {
    return this.getStringAttribute('ad_domain');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // base_scope - computed: true, optional: false, required: false
  public get baseScope() {
    return this.getStringAttribute('base_scope');
  }

  // bind_as_cifs_server - computed: true, optional: false, required: false
  public get bindAsCifsServer() {
    return this.getBooleanAttribute('bind_as_cifs_server');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // cx_profile_name - computed: true, optional: false, required: false
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }

  // ldaps_enabled - computed: true, optional: false, required: false
  public get ldapsEnabled() {
    return this.getBooleanAttribute('ldaps_enabled');
  }

  // min_bind_level - computed: true, optional: false, required: false
  public get minBindLevel() {
    return this.getStringAttribute('min_bind_level');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_ad_servers - computed: true, optional: false, required: false
  public get preferredAdServers() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_ad_servers'));
  }

  // query_timeout - computed: true, optional: false, required: false
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }

  // referral_enabled - computed: true, optional: false, required: false
  public get referralEnabled() {
    return this.getBooleanAttribute('referral_enabled');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }

  // session_security - computed: true, optional: false, required: false
  public get sessionSecurity() {
    return this.getStringAttribute('session_security');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // use_start_tls - computed: true, optional: false, required: false
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }
}

export class DataNetappOntapNameServicesLdapsNameServicesLdapsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapNameServicesLdapsNameServicesLdapsOutputReference {
    return new DataNetappOntapNameServicesLdapsNameServicesLdapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps netapp-ontap_name_services_ldaps}
*/
export class DataNetappOntapNameServicesLdaps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_name_services_ldaps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapNameServicesLdaps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapNameServicesLdaps to import
  * @param importFromId The id of the existing DataNetappOntapNameServicesLdaps that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapNameServicesLdaps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_name_services_ldaps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/name_services_ldaps netapp-ontap_name_services_ldaps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapNameServicesLdapsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapNameServicesLdapsConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_name_services_ldaps',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
  private _filter = new DataNetappOntapNameServicesLdapsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapNameServicesLdapsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // name_services_ldaps - computed: true, optional: false, required: false
  private _nameServicesLdaps = new DataNetappOntapNameServicesLdapsNameServicesLdapsList(this, "name_services_ldaps", false);
  public get nameServicesLdaps() {
    return this._nameServicesLdaps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapNameServicesLdapsFilterToTerraform(this._filter.internalValue),
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
        value: dataNetappOntapNameServicesLdapsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapNameServicesLdapsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDedicatedCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_cloud#service_name DataOvhDedicatedCloud#service_name}
  */
  readonly serviceName: string;
}
export interface DataOvhDedicatedCloudIam {
}

export function dataOvhDedicatedCloudIamToTerraform(struct?: DataOvhDedicatedCloudIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedCloudIamToHclTerraform(struct?: DataOvhDedicatedCloudIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedCloudIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedCloudIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedCloudIam | undefined) {
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }
}
export interface DataOvhDedicatedCloudVersion {
}

export function dataOvhDedicatedCloudVersionToTerraform(struct?: DataOvhDedicatedCloudVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedCloudVersionToHclTerraform(struct?: DataOvhDedicatedCloudVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedCloudVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedCloudVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedCloudVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getStringAttribute('major');
  }

  // minor - computed: true, optional: false, required: false
  public get minor() {
    return this.getStringAttribute('minor');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_cloud ovh_dedicated_cloud}
*/
export class DataOvhDedicatedCloud extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDedicatedCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDedicatedCloud to import
  * @param importFromId The id of the existing DataOvhDedicatedCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDedicatedCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dedicated_cloud ovh_dedicated_cloud} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDedicatedCloudConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDedicatedCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_cloud',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_security - computed: true, optional: false, required: false
  public get advancedSecurity() {
    return this.getBooleanAttribute('advanced_security');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // can_migrate_to_vcd - computed: true, optional: false, required: false
  public get canMigrateToVcd() {
    return this.getBooleanAttribute('can_migrate_to_vcd');
  }

  // certified_interface_url - computed: true, optional: false, required: false
  public get certifiedInterfaceUrl() {
    return this.getStringAttribute('certified_interface_url');
  }

  // commercial_range - computed: true, optional: false, required: false
  public get commercialRange() {
    return this.getStringAttribute('commercial_range');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new DataOvhDedicatedCloudIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // management_interface - computed: true, optional: false, required: false
  public get managementInterface() {
    return this.getStringAttribute('management_interface');
  }

  // product_reference - computed: true, optional: false, required: false
  public get productReference() {
    return this.getStringAttribute('product_reference');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_pack_name - computed: true, optional: false, required: false
  public get servicePackName() {
    return this.getStringAttribute('service_pack_name');
  }

  // spla - computed: true, optional: false, required: false
  public get spla() {
    return this.getBooleanAttribute('spla');
  }

  // ssl_v3 - computed: true, optional: false, required: false
  public get sslV3() {
    return this.getBooleanAttribute('ssl_v3');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_access_policy - computed: true, optional: false, required: false
  public get userAccessPolicy() {
    return this.getStringAttribute('user_access_policy');
  }

  // user_limit_concurrent_session - computed: true, optional: false, required: false
  public get userLimitConcurrentSession() {
    return this.getNumberAttribute('user_limit_concurrent_session');
  }

  // user_logout_policy - computed: true, optional: false, required: false
  public get userLogoutPolicy() {
    return this.getStringAttribute('user_logout_policy');
  }

  // user_session_timeout - computed: true, optional: false, required: false
  public get userSessionTimeout() {
    return this.getNumberAttribute('user_session_timeout');
  }

  // v_scope_url - computed: true, optional: false, required: false
  public get vScopeUrl() {
    return this.getStringAttribute('v_scope_url');
  }

  // version - computed: true, optional: false, required: false
  private _version = new DataOvhDedicatedCloudVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }

  // web_interface_url - computed: true, optional: false, required: false
  public get webInterfaceUrl() {
    return this.getStringAttribute('web_interface_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

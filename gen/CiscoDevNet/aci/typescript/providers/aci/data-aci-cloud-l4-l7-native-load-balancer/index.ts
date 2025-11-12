// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciCloudL4L7NativeLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer#id DataAciCloudL4L7NativeLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer#name DataAciCloudL4L7NativeLoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer#name_alias DataAciCloudL4L7NativeLoadBalancer#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer#tenant_dn DataAciCloudL4L7NativeLoadBalancer#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer aci_cloud_l4_l7_native_load_balancer}
*/
export class DataAciCloudL4L7NativeLoadBalancer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_l4_l7_native_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciCloudL4L7NativeLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciCloudL4L7NativeLoadBalancer to import
  * @param importFromId The id of the existing DataAciCloudL4L7NativeLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciCloudL4L7NativeLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_l4_l7_native_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_native_load_balancer aci_cloud_l4_l7_native_load_balancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciCloudL4L7NativeLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciCloudL4L7NativeLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_l4_l7_native_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
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
    this._nameAlias = config.nameAlias;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_domain_dn - computed: true, optional: false, required: false
  public get aaaDomainDn() {
    return cdktf.Fn.tolist(this.getListAttribute('aaa_domain_dn'));
  }

  // active_active - computed: true, optional: false, required: false
  public get activeActive() {
    return this.getStringAttribute('active_active');
  }

  // allow_all - computed: true, optional: false, required: false
  public get allowAll() {
    return this.getStringAttribute('allow_all');
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // auto_scaling - computed: true, optional: false, required: false
  public get autoScaling() {
    return this.getStringAttribute('auto_scaling');
  }

  // cloud_l4l7_load_balancer_type - computed: true, optional: false, required: false
  public get cloudL4L7LoadBalancerType() {
    return this.getStringAttribute('cloud_l4l7_load_balancer_type');
  }

  // context_aware - computed: true, optional: false, required: false
  public get contextAware() {
    return this.getStringAttribute('context_aware');
  }

  // custom_resource_group - computed: true, optional: false, required: false
  public get customResourceGroup() {
    return this.getStringAttribute('custom_resource_group');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // function_type - computed: true, optional: false, required: false
  public get functionType() {
    return this.getStringAttribute('function_type');
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

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getStringAttribute('instance_count');
  }

  // is_copy - computed: true, optional: false, required: false
  public get isCopy() {
    return this.getStringAttribute('is_copy');
  }

  // is_instantiation - computed: true, optional: false, required: false
  public get isInstantiation() {
    return this.getStringAttribute('is_instantiation');
  }

  // is_static_ip - computed: true, optional: false, required: false
  public get isStaticIp() {
    return this.getStringAttribute('is_static_ip');
  }

  // l4l7_device_application_security_group - computed: true, optional: false, required: false
  public get l4L7DeviceApplicationSecurityGroup() {
    return this.getStringAttribute('l4l7_device_application_security_group');
  }

  // l4l7_third_party_device - computed: true, optional: false, required: false
  public get l4L7ThirdPartyDevice() {
    return this.getStringAttribute('l4l7_third_party_device');
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getStringAttribute('managed');
  }

  // max_instance_count - computed: true, optional: false, required: false
  public get maxInstanceCount() {
    return this.getStringAttribute('max_instance_count');
  }

  // min_instance_count - computed: true, optional: false, required: false
  public get minInstanceCount() {
    return this.getStringAttribute('min_instance_count');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // native_lb_name - computed: true, optional: false, required: false
  public get nativeLbName() {
    return this.getStringAttribute('native_lb_name');
  }

  // package_model - computed: true, optional: false, required: false
  public get packageModel() {
    return this.getStringAttribute('package_model');
  }

  // promiscuous_mode - computed: true, optional: false, required: false
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }

  // relation_cloud_rs_ldev_to_cloud_subnet - computed: true, optional: false, required: false
  public get relationCloudRsLdevToCloudSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_cloud_rs_ldev_to_cloud_subnet'));
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // static_ip_addresses - computed: true, optional: false, required: false
  public get staticIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ip_addresses'));
  }

  // target_mode - computed: true, optional: false, required: false
  public get targetMode() {
    return this.getStringAttribute('target_mode');
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // trunking - computed: true, optional: false, required: false
  public get trunking() {
    return this.getStringAttribute('trunking');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

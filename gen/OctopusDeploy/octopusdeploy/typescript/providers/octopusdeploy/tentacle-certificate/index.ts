// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tentacle_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TentacleCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional map of dependencies that when modified will trigger a re-creation of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tentacle_certificate#dependencies TentacleCertificate#dependencies}
  */
  readonly dependencies?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tentacle_certificate octopusdeploy_tentacle_certificate}
*/
export class TentacleCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_tentacle_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TentacleCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TentacleCertificate to import
  * @param importFromId The id of the existing TentacleCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tentacle_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TentacleCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_tentacle_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/tentacle_certificate octopusdeploy_tentacle_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TentacleCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TentacleCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_tentacle_certificate',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dependencies = config.dependencies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64 - computed: true, optional: false, required: false
  public get base64() {
    return this.getStringAttribute('base64');
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: { [key: string]: string }; 
  public get dependencies() {
    return this.getStringMapAttribute('dependencies');
  }
  public set dependencies(value: { [key: string]: string }) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependencies: cdktf.hashMapper(cdktf.stringToTerraform)(this._dependencies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependencies: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dependencies),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
